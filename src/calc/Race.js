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
    this.id           // unique id string
    */

    // Update the missing fields
    this.recalcFields()
  }

  // Set the time given array of [hh,mm,ss] or [mm,ss] or [hh,mm]
  // Note that offset 0 is the most significant part (hh or mm).
  // Adjust time based on what's reasonable for the distance.
  recalcFields() {
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
    return this.toHHMMSS(this.getTime());
  }

  // EYE - default to min/mile 
  getPaceString() {
    if (this.distance && this.time) {
      return this.toHHMMSS(1609 * this.time/this.distance);
    }
  }

  // Return time as HH:MM:SS string format
  toHHMMSS(time) {
    let timeString = "";
    if (time) {
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time - (hours * 3600)) / 60);
      let seconds = Math.floor(time - (hours * 3600) - (minutes * 60));

      timeString = hours.toString().padStart(2, '0') + ':' + 
        minutes.toString().padStart(2, '0') + ':' + 
        seconds.toString().padStart(2, '0');
    }
    return timeString;
  }

  // Predict time for a given distance, returning the time and 
  // a confidence weight for our prediction. 
  predictTime(distance) {
    // NOTE: 5% factor may need to shift as distances get away from the
    // past race. 800m might not be accurate either.
    let factor = 1.05;
    let adjust = factor ** Math.log2(distance / this.distance);
    let time = this.time * (distance / this.distance) * adjust;

    // Weight is ratio of race distances diminishing predictive value 
    // as distances get further apart. 
    let ratio = distance / this.distance;
    if (ratio > 1.0) {
      ratio = 1 / ratio;
    }
    let weight = ratio;  
    return [time, weight];
  }
}