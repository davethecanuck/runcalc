// User profile gives default age
import * as profileService from './userProfile'

const KEYS = {
  scenario: "scenario",
  altitude: "altitude",
  age: "age",
  elevGain: "elevGain",
  elevLoss: "elevLoss",
}

const DEFAULT_ALTITUDE = 0
const DEFAULT_ELEV_GAIN = 0
const DEFAULT_ELEV_LOSS = 0
const MIN_AGE = 5

export function getScenario() {
  let scenario = JSON.parse(localStorage.getItem(KEYS.scenario) || "{}")
  let didUpdate = false

  if (!scenario[KEYS.altitude]) {
    scenario[KEYS.altitude] = DEFAULT_ALTITUDE
    didUpdate = true
  }
  if (!scenario[KEYS.elevGain]) {
    scenario[KEYS.elevGain] = DEFAULT_ELEV_GAIN
    didUpdate = true
  }
  if (!scenario[KEYS.elevLoss]) {
    scenario[KEYS.elevLoss] = DEFAULT_ELEV_LOSS
    didUpdate = true
  }
  if (!scenario[KEYS.age]) {
    // Pull age from user profile (defaults to 25)
    const profile = profileService.getProfile()
    scenario[KEYS.age] = new Date().getFullYear() - profile.birthYear
    if (scenario[KEYS.age] < MIN_AGE) {
      scenario[KEYS.age] = MIN_AGE
    }
    didUpdate = true
  }
  if (didUpdate) {
    saveScenario(scenario)
  }
  return scenario
}

export function saveScenario(scenario) {
  localStorage.setItem(KEYS.scenario, JSON.stringify(scenario))
}