// User profile gives default age
import * as profileService from './userProfile'

const KEYS = {
  scenario: "scenario",
  altitude: "altitude",
  age: "age",
}

const DEFAULT_ALTITUDE = 0
const DEFAULT_AGE = 25

export function getScenario() {
  let scenario = JSON.parse(localStorage.getItem(KEYS.scenario) || "{}")
  let didUpdate = false

  if (!scenario[KEYS.altitude]) {
    scenario[KEYS.altitude] = DEFAULT_ALTITUDE
    didUpdate = true
  }
  if (!scenario[KEYS.age]) {
    // Pull age from user profile (defaults to 25)
    const profile = profileService.getProfile()
    scenario[KEYS.age] = new Date().getFullYear() - profile.birthYear
    if (scenario[KEYS.age] < 1) {
      scenario[KEYS.age] = DEFAULT_AGE
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