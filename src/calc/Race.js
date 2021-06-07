import * as distanceService from './distance'

// Encapsulate a race so we can infer reasonable times and calculate
// things like pace and age grade
export class Race {
  constructor(distance) {
    this.distance = distance
    this.timeParts = []
    this.time = null
  }

  setDistance(meters) {
    this.distance = meters;

    // Re-validate time by setting the hh:mm:ss time parts
    // and re-calculating the time so it's reasonable for the 
    // distance
    if (this.timeParts != null) {
      this.setTimeParts(this.timeParts);
    }
  }

  getDistanceName() {
    return distanceService.getName(this.distance)
  }

  // Set time given array of [hh,mm,ss] or [mm,ss] or [hh,mm]
  // Note that offset 0 is the most significant part (hh or mm).
  // Adjust time based on what's reasonable for the distance
  setTimeParts(timeParts) {
    while (timeParts.length < 3) {
      timeParts.unshift(0);  // Pad with leading 0 
    }

    if (this.distance != null && timeParts[0] === 0) {
      // First pass - assume mm:ss
      let time = this.calcTime(timeParts);
      let velocity = this.distance / time;

      if (velocity > 15.0) { 
        // 15 m/s is faster than a human can run, try hh:mm instead
        timeParts[0] = timeParts[1];
        timeParts[1] = timeParts[2];
        timeParts[2] = 0;
      }
    }

    // Fully specified hh:mm:ss
    this.timeParts = timeParts
    this.time = this.calcTime(timeParts);
  }

  // Convert timeParts to an integer time
  calcTime(timeParts) {
    return timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];
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

  getTimeString() {
    return this.toHHMMSS(this.time);
  }

  // EYE - default to min/mile 
  getPaceString() {
    if (this.distance && this.time) {
      return this.toHHMMSS(1609 * this.time/this.distance);
    }
  }

  // Return time as HH:MM:SS format
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
}