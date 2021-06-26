const KEYS = {
  scenario: "scenario",
  altitude: "altitude"
}

export function getScenario() {
  let scenario = localStorage.getItem(KEYS.scenario)
  if (scenario == null) {
    scenario = JSON.stringify({ "altitude": 0 })
    localStorage.setItem(KEYS.scenario, scenario)
  }
  return JSON.parse(scenario)
}

export function updateScenario(newScenario) {
  let scenario = getScenario()
  scenario = {...newScenario}
  localStorage.setItem(KEYS.scenario, JSON.stringify(scenario))
}