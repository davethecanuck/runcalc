import * as distanceCalc from './distance'
import * as historyService from '../services/pastRaces'
import Race from './Race'

// Return array of race distances with prediction values
export function getRacePredictions(scenario) {
  // Iterate by target race
  let targetRaces = []
  const history = historyService.getPastRaces()

  distanceCalc.getDistances().forEach(target => {
    // Iterate past races
    let totalTime = 0.0
    let totalWeight = 0.0

    let targetRace = new Race({
      distance: target.distance, 
      age: scenario.age,
      altitude: scenario.altitude,
      elevGain: scenario.elevGain,
      elevLoss: scenario.elevLoss,
    })

    history.forEach(pastRace => {
      const [time, weight] = pastRace.predictTime(targetRace)
      totalTime += time * weight
      totalWeight += weight
    })

    if (totalWeight > 0.0) {
      targetRace.setTime(totalTime/totalWeight)
      targetRaces.push(targetRace)
    }
  })
  return targetRaces
}