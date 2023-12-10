import {FEMALE_DATA} from './femaleAgeGrade'
import {MALE_DATA} from './maleAgeGrade'

// Minimum age in age grade tables
const MIN_AGE = 5;

/*
NOTE TBD - pre-can standards and factors for our set distances
- change distances array to be meters not km so no floating point errors
- use standards for bestTime calculations
- create maps to set way to convert one distance to another 
  as ratio of standards
- reformat as maps in this file for more efficient lookup and no interpolation
*/

// Invert factors to the >1.0 semantic used in the calculator
export function getFemaleAgeGradeFactor(age, meters) {
  return 1.0 / getAgeGradeFactor(FEMALE_DATA, age, meters)
}

export function getMaleAgeGradeFactor(age, meters) {
  return 1.0 / getAgeGradeFactor(MALE_DATA, age, meters)
}

export function getFemaleStandardTime(meters) {
  return getStandardTime(FEMALE_DATA, meters)
}

export function getMaleStandardTime(meters) {
  return getStandardTime(MALE_DATA, meters)
}

export function getFemaleAgeGrade(time, age, meters) {
  return getFemaleAgeGradeFactor(age, meters) * getFemaleStandardTime(meters) / time 
}

export function getMaleAgeGrade(time, age, meters) {
  return getMaleAgeGradeFactor(age, meters) * getMaleStandardTime(meters) / time 
}

// Return the age offset from the data
function getAgeOffset(age) {
  let offset = age - MIN_AGE 
  if (offset < 0) {
    offset = 0
  }
  return offset
}

// Convert meters to the distances used in the raw data
function getDistance(meters) {
  return meters / 1000.0
}

// Given a distance, return the standard time. Interpolate from raw data
function getStandardTime(data, meters) {
  const distance = getDistance(meters)

  // Assumes data.distance and data.standard are same length
  for (const [i, currDist] of data.distance.entries()) {
    if (currDist >= distance) {
      if (i > 0) {
        // Interpolate
        const range = currDist - data.distance[i-1]
        return (
          data.standard[i-1] * (currDist - distance) / range
            +
          data.standard[i] * (distance - data.distance[i-1]) / range
        )
      }
      else {
        return data.standard[i]
      }
    }
  }

  // Stepped off the end
  return data.standard[data.distance.length - 1]
}

// Given an age and distance, get the grading factor. Interpolate from raw
// data, and use min/max values for age <5 and >max
function getAgeGradeFactor(data, age, meters) {
  // Get factor row for our age
  let offset = getAgeOffset(age)
  const factor = data.factor[offset]
  const distance = getDistance(meters)

  // Assumes data.distance and data.factor are same length
  for (const [i, currDist] of data.distance.entries()) {
    if (currDist >= distance) {
      if (i > 0) {
        // Interpolate
        const range = currDist - data.distance[i-1]
        return (
          factor[i-1] * (currDist - distance) / range
            +
          factor[i] * (distance - data.distance[i-1]) / range
        )
      }
      else {
        return factor[i]
      }
    }
  }

  // Stepped off the end
  return factor[data.distance.length - 1]
}