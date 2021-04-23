import { Scenario } from './scenario.js';
import { getLabel } from './distance.js';

export class Race {
  distance = null;    // In meters
  time = null;        // In seconds
  timeParts = null;   // Array of hh:mm, mm:ss, or hh:mm:ss
  scenario = new Scenario();

  setDistance(meters) {
    this.distance = meters;

    // Re-validate time by setting the hh:mm:ss time parts
    // and re-calculating the time so it's reasonable for the 
    // distance
    if (this.timeParts != null) {
      this.setTimeParts(this.timeParts);
    }
  }

  // EYE TBD - get from scenario.age
  ageGrade() {
    return 75;
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
  // EYE - add scenario as an input so time delta is part of confidence
  // and using our own race.scenario as well
  // EYE - should move all but time out to a model object?
  predictTime(distance) {
    // NOTE: 5% factor may need to shift as distances get away from the
    // past race. 800m might not be accurate either.
    let factor = 1.05;
    let adjust = factor ** Math.log2(distance / this.distance);
    let time = this.time * (distance / this.distance) * adjust;

    // Weight is ratio of race distances diminishing predictive value 
    // as distances get further apart. 
    // EYE - we'll further adjust weight by age, altitude, etc. as 
    // scenario data is fleshed out
    let ratio = distance / this.distance;
    if (ratio > 1.0) {
      ratio = 1 / ratio;
    }
    let weight = ratio;  

    /*
    console.log("1. predictTime this.distance=" + this.distance + 
        " this.time=" + this.time + " input.distance=" + distance + 
        " output.time=" + time + " adjust=" + adjust + 
        " ratio=" + ratio + " weight=" + weight);
    */

    return [time, weight];
  }

  getTimeString() {
    return this.toHHMMSS(this.time);
  }

  // EYE min/mile
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

  // Return the race distance label
  getDistanceLabel() {
    return getLabel(this.distance);
  }
}