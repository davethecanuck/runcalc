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
  predictTime(distance) {
    // Using formula of doubling distance leading to doubling time + 6%
    let adjust = 1.06 ** Math.log2(distance / this.distance);
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

    console.log("1. predictTime this.distance=" + this.distance + 
        " this.time=" + this.time + " input.distance=" + distance + 
        " output.time=" + time + " adjust=" + adjust + 
        " ratio=" + ratio + " weight=" + weight);

    return [time, weight];
  }

  // Return time as HH:MM:SS format
  getTimeString() {
    let timeString = "";
    if (this.time) {
      let hours = Math.floor(this.time / 3600);
      let minutes = Math.floor((this.time - (hours * 3600)) / 60);
      let seconds = this.time - (hours * 3600) - (minutes * 60);

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