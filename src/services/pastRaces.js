import Race from '../calc/Race'

const KEYS = {
  pastRaces: "pastRaces",
  distance: "distance",
  time: "time",
  id: "id",
}

function generateId() {
  // Base on time of day as u8 epoch time
  return Date.now()
}

export function getPastRaces() {
  let pastRaces = localStorage.getItem(KEYS.pastRaces)
  if (pastRaces == null || pastRaces.length === 0) {
    pastRaces = JSON.stringify([])
    localStorage.setItem(KEYS.pastRaces, pastRaces)
  }

  // Convert raw json/obj to Race class instance
  let rawData = JSON.parse(pastRaces)
  let results = []
  rawData.forEach(row => {
    results.push(new Race(row))
  })
  //return JSON.parse(pastRaces)
  return results
}

export function insertPastRace(data) {
  let pastRaces = getPastRaces()
  data[KEYS.id] = generateId()
  pastRaces.push(data)
  localStorage.setItem(KEYS.pastRaces, JSON.stringify(pastRaces))
}

export function updatePastRace(data) {
  let pastRaces = getPastRaces()
  let idx = pastRaces.findIndex(x => x.id === data.id)
  pastRaces[idx] = {...data}
  localStorage.setItem(KEYS.pastRaces, JSON.stringify(pastRaces))
}

export function deletePastRace(id) {
  let pastRaces = getPastRaces()
  pastRaces = pastRaces.filter(x => x.id !== id)
  localStorage.setItem(KEYS.pastRaces, JSON.stringify(pastRaces))
}