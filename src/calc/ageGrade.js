import {FEMALE_DATA} from './femaleAgeGrade'
import {MALE_DATA} from './maleAgeGrade'

// Minimum age in age grade tables
const MIN_AGE = 5;

export function getFemaleAgeGradeFactor(age, meters) {
    return getAgeGradeFactor(FEMALE_DATA, age, meters)
}

export function getMaleAgeGradeFactor(age, meters) {
    return getAgeGradeFactor(MALE_DATA, age, meters)
}

// Given an age and distance, get the grading factor. Interpolate from raw
// data, and use min/max values for age <5 and >max
function getAgeGradeFactor(data, age, meters) {
    // Get factor row for our age
    let offset = age - MIN_AGE 
    if (offset < 0) {
        offset = 0
    }
    const factor = data.factor[offset]

    // Assumes data.distance and data.factor are same length
    const distance = meters / 1000.0
    for (const [i, currDist] of data.distance.entries()) {
        if (currDist >= distance) {
            if (i > 0) {
                // Interpolate
                return (
                    factor[i] 
                        * (currDist - distance) 
                        / (currDist - data.distance[i-1])
                    +
                    factor[i-1] 
                        * (distance - data.distance[i-1]) 
                        / (currDist - data.distance[i-1])
                )
            }
            else {
                return factor[i]
            }
        }
    }
    // Stepped off the end
    return factor[data.distance.length]
}