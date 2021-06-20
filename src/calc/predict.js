import * as distanceCalc from './distance'
import * as historyService from '../services/pastRaces'
import Race from './Race'

// Return array of race distances with prediction values
export function getRacePredictions() {
  // Iterate by target race
  let targetRaces = []

  distanceCalc.getDistances().forEach(target => {
    // Iterate past races
    let totalTime = 0.0
    let totalWeight = 0.0
    historyService.getPastRaces().forEach(pastRace => {
      const [time, weight] = pastRace.predictTime(
        // EYE - Can update target race with altitude/age/etc.
        // based on whatever the scenario is set to
        new Race({distance: target.distance})
      )
      totalTime += time * weight
      totalWeight += weight
    })
    if (totalWeight > 0.0) {
      let targetRace = new Race({
        time: totalTime/totalWeight,
        distance: target.distance,
      })
      targetRaces.push(targetRace)
    }
  })
  return targetRaces
}