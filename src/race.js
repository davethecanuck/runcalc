import { Scenario } from './scenario.js';

export class Race {
  label = null;       // Common name for race distance
  distance = null;    // In meters
  time = null;        // In seconds
  timeParts = null;   // Array of hh:mm, mm:ss, or hh:mm:ss
  scenario = new Scenario();

  setDistance(distance) {
    this.distance = distance;

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
    // EYE - Nope, this breaks down at longer distances
    let adjust = 1.06 ** Math.log2(distance / this.distance);
    let time = this.time * (distance / this.distance) * adjust;

    // Weight is square of ratio of race distances (exponentially 
    // diminishing predictive value as distances get further apart)
    let ratio = distance / this.distance;
    if (ratio > 1.0) {
      ratio = 1 / ratio;
    }
    let weight = Math.pow(ratio, 2);

    console.log("1. predictTime this.distance=" + this.distance + 
        " this.time=" + this.time + " input.distance=" + distance + 
        " output.time=" + time + " adjust=" + adjust + 
        " ratio=" + ratio + " weight=" + weight);

    return [time, weight];
  }
}