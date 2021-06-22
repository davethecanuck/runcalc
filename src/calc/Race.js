import * as distanceService from './distance'

// Encapsulate a race so we can infer reasonable times and calculate
// things like pace and age grade
export default  class Race {
  constructor(race = {}) {
    Object.assign(this, race);

    /* Object must match the following:
    this.distance     // meters
    this.distanceName // Name for this distance
    this.time         // int
    this.timeParts    // int[3] = hh,mm,ss
    this.hhmmss       // "hh:mm:ss" string
    this.altitude     // int
    this.id           // unique id string
    */

    // Update the missing fields
    this.recalcFields()
  }

  // Set the time given array of [hh,mm,ss] or [mm,ss] or [hh,mm]
  // Note that offset 0 is the most significant part (hh or mm).
  // Adjust time based on what's reasonable for the distance.
  recalcFields() {
    // Default to 0 ft altitude
    this.altitude |= 0

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
          let time = this.getTime()
          let velocity = this.distance / time

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
      }
    }
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
        Math.floor(this.time % 60),
      ]
    }
    else {
      return null
    }
  }

  getHHMMSS() {
    let time = this.getTime()
    let hhmmss = "";
    if (time) {
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time - (hours * 3600)) / 60);
      let seconds = Math.floor(time - (hours * 3600) - (minutes * 60));

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
      let time = 1609 * this.time/this.distance
      let minutes = Math.floor(time / 60);
      let seconds = Math.floor(time - (minutes * 60));

      mmss = minutes.toString().padStart(2, '0') + ':' + 
        seconds.toString().padStart(2, '0');
    }
    return mmss;
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
  // Note also that we subtract the equivalent of 600m from the distance
  // as this was found through regression to be a good adjustment, largely
  // based on the first 600 of an 800 being anaerobic.
  altitudeFactor() {
    // Alternate where we extend distance to account for slower times
    //let adjDistance = (this.distance - 600) * this.rawGradeFactor();
    let adjDistance = (this.distance - 600)
    let regInput = (this.altitude**2.2 * adjDistance**0.3) / 100000000
    return 1 + 0.00178*regInput - 0.0000113*regInput**2
  }

  // Essentially a raw age-grade type score against the reference
  // predicted time (based on world record)
  rawGradeFactor() {
    return this.time / this.bestTime()
  }

  // Use this race to predict the time for another race. 
  predictTime(race) {
    // Set race time to expected value at sea level so we can calculate the 
    // altitude adjustment for that race
    race.time = race.bestTime() * this.rawGradeFactor() / this.altitudeFactor()
    const time = race.time * race.altitudeFactor()

    // Weight is ratio of race distances diminishing predictive value 
    // as distances get further apart. 
    let ratio = race.distance / this.distance;
    if (ratio > 1.0) {
      ratio = 1 / ratio;
    }
    let weight = ratio;  
    return [time, weight];
  }
}