import * as distanceService from './distance'
import * as profileService from '../services/userProfile'
import * as ageGrade from './ageGrade'

const MAX_GRADE = 35
const DEFAULT_AGE = 25

// Encapsulate a race so we can infer reasonable times and calculate
// things like pace and age grade
export default class Race {
  constructor(race = {}) {
    Object.assign(this, race);

    /* Object must match the following:
    this.id           // unique id string
    this.distance     // race distance meters
    this.distanceName // Name for this distance
    this.time         // int
    this.timeParts    // int[3] = hh,mm,ss
    this.hhmmss       // "hh:mm:ss" string
    this.altitude     // int (ft)
    this.elevGain     // int (ft)
    this.elevLoss     // int (ft)
    this.age          // int (years)
    this.raceGrade    // double - raw grade of this race against the male best time
                      // e.g. 0.5 means 50% slower than equivalent world best
    this.adjustFactor // double - All in adjustment factor for this race 
    this.flatLevelTime // int - Race time adjusted to sea-level, flat, and 
                      //       no elevation change (for actual age)
    */

    // Update the missing fields
    this.recalcFields()
  }

  // Set the time given array of [hh,mm,ss] or [mm,ss] or [hh,mm]
  // Note that offset 0 is the most significant part (hh or mm).
  // Adjust time based on what's reasonable for the distance.
  recalcFields() {
    // Default to 0 ft altitude and current age
    if (!this.altitude) {
      this.altitude = 0
    }
    if (!this.elevGain) {
      this.elevGain = 0
    }
    if (!this.elevLoss) {
      this.elevLoss = 0
    }

    if (!this.age) {
      const profile = profileService.getProfile()
      this.age = new Date().getFullYear() - profile.birthYear

      if (this.age < 1) {
        this.age = DEFAULT_AGE
      }
    }

    // Need distance as a minimum for interpreting the time
    if (this.distance != null) {
      this.distanceName = distanceService.getName(this.distance)

      if (this.timeParts == null) {
        this.timeParts = this.getTimeParts()
      }

      if (this.timeParts != null) {
        while (this.timeParts.length < 3) {
          this.timeParts.unshift(0);  // Pad with leading 0 
        }

        if (this.distance != null && this.timeParts[0] === 0) {
          // First pass - assume mm:ss
          const time = this.getTime()
          const velocity = this.distance / time

          if (velocity > 15.0) { 
            // 15 m/s is faster than a human can run, try hh:mm instead
            this.timeParts[0] = this.timeParts[1]
            this.timeParts[1] = this.timeParts[2]
            this.timeParts[2] = 0
          }
        }

        // Fully specified hh:mm:ss
        this.time = this.getTime()
        this.hhmmss = this.getHHMMSS()

        const elevationFactor = this.elevationFactor()
        const altitudeFactor = this.altitudeFactor()
        const ageGradeFactor = this.ageGradeFactor()

        // Adjusted to flat and sea level for the actual age
        this.flatLevelTime = this.time / (elevationFactor * altitudeFactor)

        // All in adjustment factor for this race
        this.adjustFactor = elevationFactor * altitudeFactor * ageGradeFactor

        // All in grade for this race
        this.raceGrade = this.bestTime() * this.adjustFactor / this.time 
      }
    }
  }

  // Return the average altitude for the race (starting altitude
  // plus average of elevation gain and loss)
  getAvgAltitude() {
    return Math.max(0, this.altitude + (this.elevGain - this.elevLoss) / 2.0)
  }

  // Sets the time field, forcing recalculation of the related fields
  setTime(newTime) {
    this.time = newTime
    this.timeParts = null
    this.recalcFields()
  }

  // Return time from object or timeParts 
  getTime() {
    // Prefer convert from timeParts
    if (this.timeParts != null) {
      return this.timeParts[0] * 3600 + this.timeParts[1] * 60 + this.timeParts[2]
    }
    else if (this.time != null) {
      return this.time
    }
    else {
      return null
    }
  }

  getTimeParts() {
    if (this.timeParts != null) {
      return this.timeParts
    }
    else if (this.time != null) {
      return [
        Math.floor(this.time/3600),
        Math.floor((this.time % 3600)/60),
        Math.round(this.time % 60),
      ]
    }
    else {
      return null
    }
  }

  getHHMMSS() {
    const time = this.getTime()
    let hhmmss = "";
    if (time) {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time - (hours * 3600)) / 60);
      const seconds = Math.round(time - (hours * 3600) - (minutes * 60));

      hhmmss = hours.toString().padStart(2, '0') + ':' + 
        minutes.toString().padStart(2, '0') + ':' + 
        seconds.toString().padStart(2, '0');
    }
    return hhmmss;
  }

  // NOTE - defaulting to min/mile 
  getPaceString() {
    let mmss = "";
    if (this.distance && this.time) {
      //return this.toMMSS(1609 * this.time/this.distance);
      const time = 1609 * this.time/this.distance
      const minutes = Math.floor(time / 60);
      const seconds = Math.round(time - (minutes * 60));

      mmss = minutes.toString().padStart(2, '0') + ':' + 
        seconds.toString().padStart(2, '0');
    }
    return mmss;
  }

  // Return the Age Grade as a percentage
  getAgeGradeString() {
    let agString = ""

    if (this.raceGrade) {
      let ag = 1.0
      const profile = profileService.getProfile()

      // The raceGrade is essentially the male age grade
      if (profile.gender === 'male') {
        ag = ageGrade.getMaleAgeGrade(this.flatLevelTime, this.age, this.distance)
      }
      else if (profile.gender === 'female') {
        ag = ageGrade.getFemaleAgeGrade(this.flatLevelTime, this.age, this.distance)
      }
      else {
        ag = (
          ageGrade.getMaleAgeGrade(this.flatLevelTime, this.age, this.distance)
          + 
          ageGrade.getFemaleAgeGrade(this.flatLevelTime, this.age, this.distance)
        ) / 2.0
      }
      agString = (100.0 * ag).toFixed(1)
    }
    return agString
  }

  // Based on polynomial regression of men's and women's world record times.
  // The best fit is mostly a 2nd-degree curve, but with tail at shorter 
  // distances necessitating a 3rd degree polynomial. 
  bestTime() {
    return -19.964 + 0.152*this.distance 
      + 0.0000009098*(this.distance**2) - 9.556E-12*(this.distance**3)
  }

  // Adjustment factor for altitude. Based on regression of NCAA altitude
  // tables, we see that the factor gets larger the longer you run (in time
  // as opposed to distance). So if our race took 20% longer than the 
  // reference bestTime, then we do our altitude factor given a distance 
  // that is 20% longer. NOTE: For now we just use the raw distances as this
  // results in a time prediction closer to the NCAA tables, but those tables
  // may be flawed. E.g. The 10,000m adjustment is the same for a given altitude
  // regardless if the runner was a D1 male or D3 female.
  // 
  // Note also that we subtract the equivalent of 790m from the distance
  // as this was found through regression to be a good adjustment, largely
  // based on the 800m being largely anaerobic (altitude adjustment is small).
  altitudeFactor() {
    // Regressions were done against D1 NCAA women's times, so the 
    // rawGradeFactor (based on male world record) needs to be adjusted down.
    // D1 10km reference time is  33:30, and male record is 26:11 (1.28:1 ratio)
    const adjDistance = (this.distance - 790) * this.rawGradeFactor() / 1.28
    const regInput = (this.getAvgAltitude()**1.85 * adjDistance**0.22) / 100000000
    
    // 1st-degree (linear) regression of the 'regInput' formula
    return 1 + 0.0595*regInput
  }

  // Get adjustment for elevation gain and loss. 
  //
  // Based on regression of Strava data represented as 2nd degree polynomial
  // as per https://medium.com/strava-engineering/an-improved-gap-model-8b07ae8886c3
  //
  // We model the elevation changes such that the average grade up and 
  // down are the same. Grade is rise over run (horizontal birds-eye distance)
  elevationFactor() {
    // Note that the values are supposed to be positive  both up and down.
    const riseUp = Math.abs(this.elevGain * 0.3048)
    const riseDown = Math.abs(this.elevLoss * 0.3048)
    const riseTotal = riseUp + riseDown
    const runTotal = Math.sqrt(this.distance**2 - riseTotal**2)
    
    // Grade% is 100 * rise/run, but we cap at 35% (MAX_GRADE)
    const gradeUp = Math.min(100 * riseTotal / runTotal, MAX_GRADE)
    const gradeDown = -1 * gradeUp

    // Calculate the portion of the distance where we apply the up grade
    // and down grade. If no elevation up or down, we split race evenly
    // and the factor will end up as 1.0
    const ratioUp = (riseUp + riseDown > 0) ? riseUp/(riseUp + riseDown) : 0.5
    const distUp = this.distance * ratioUp
    const distDown = this.distance - distUp

    // Final factor is based off of GAP model from Strava. Note that
    // grade is negative for downhill
    const factorUp = 1 + 0.03 * gradeUp + 1.5e-3 * gradeUp**2
    const factorDown = 1 + 0.03 * gradeDown + 1.5e-3 * gradeDown**2
    return (factorUp * distUp + factorDown * distDown) / this.distance
  }

  // Essentially a raw age-grade type score against the reference
  // predicted time (based on world record)
  rawGradeFactor() {
    return this.time / this.bestTime()
  }

  // Age grade factor for this race
  ageGradeFactor() {
    // If gender=other, use average of male and female age grades
    const profile = profileService.getProfile()

    if (profile.gender === 'female') {
      return ageGrade.getFemaleAgeGradeFactor(this.age, this.distance)
    }
    else if (profile.gender === 'male') {
      return ageGrade.getMaleAgeGradeFactor(this.age, this.distance)
    }
    else {
      return (
        ageGrade.getFemaleAgeGradeFactor(this.age, this.distance)
        + ageGrade.getMaleAgeGradeFactor(this.age, this.distance)
      ) / 2.0
    }
  }

  // Use this race to predict the time for another race. 
  predictTime(race) {
    // Set race time to expected value at sea level so we can calculate the 
    // altitude adjustment for that race
    race.setTime(race.bestTime() / this.raceGrade)
    const time = race.time * race.adjustFactor

    // Weight is ratio of race distances diminishing predictive value 
    // as distances get further apart. TBD - Perhaps discount older results
    // or ones with different elevations?
    let ratio = race.distance / this.distance;
    if (ratio > 1.0) {
      ratio = 1 / ratio;
    }
    const weight = ratio;  
    return [time, weight];
  }
}