import * as distanceCalc from './distance'
import * as historyService from '../services/pastRaces'
import Race from './Race'

// Return array of race distances with prediction values
export function getRacePredictions(scenario) {
  // Iterate by target race
  let targetRaces = []

  distanceCalc.getDistances().forEach(target => {
    // Iterate past races
    let totalTime = 0.0
    let totalWeight = 0.0

    historyService.getPastRaces().forEach(pastRace => {
      const [time, weight] = pastRace.predictTime(
        new Race({
          distance: target.distance, 
          age: scenario.age,
          altitude: scenario.altitude,
          elevGain: scenario.elevGain,
          elevLoss: scenario.elevLoss,
        })
      )
      totalTime += time * weight
      totalWeight += weight
    })

    if (totalWeight > 0.0) {
      // Create new predicted/target race for the scenario 
      let targetRace = new Race({
        time: totalTime/totalWeight,
        distance: target.distance,
        altitude: scenario.altitude,
        elevGain: scenario.elevGain,
        elevLoss: scenario.elevLoss,
        age: scenario.age,
      })
      targetRaces.push(targetRace)
    }
  })
  return targetRaces
}