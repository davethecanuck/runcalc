// 800m is the minimum distance where the model barely works, 
// and 1500m is probably closer to reality for predictiveness.
// Because of this, we could fudge factors to the distances to 
// correct for the model inconsistency. But this causes complications
// with converting between distances and paces
const DISTANCES = [
  //{ name: "800m", distance: 795 },
  { name: "800m", distance: 800 },
  //{ name: "1km", distance: 995 },
  { name: "1km", distance: 1000 },
  //{ name: "1500m", distance: 1495 },
  { name: "1500m", distance: 1500 },
  //{ name: "1600m", distance: 1591 },
  { name: "1600m", distance: 1600 },
  //{ name: "1 mile", distance: 1600 },
  { name: "1 mile", distance: 1609 },
  //{ name: "3000m", distance: 2980 },
  { name: "3000m", distance: 3000 },
  { name: "2 mile", distance: 3219 },
  { name: "5km", distance: 5000 },
  { name: "8km", distance: 8000 },
  { name: "5 mile", distance: 8047 },
  { name: "10km", distance: 10000 },
  { name: "15km", distance: 15000 },
  { name: "20km", distance: 20000 },
  { name: "13.1 mi", distance: 21097 },
  { name: "26.2 mi", distance: 42195 },
]
// Predictions aren't great at 50k
//  { name: "50km", distance: 50000 }

const SELECT_OPTIONS = DISTANCES.map((row) => {
  return { title: row.name, id: row.distance }
})

const NAME_BY_DISTANCE = DISTANCES.reduce((map, obj) => (
  map[obj.distance] = obj.name, map 
), {})

const DISTANCE_BY_NAME = DISTANCES.reduce((map, obj) => (
  map[obj.name] = obj.distance, map
), {})

export function getName(distance) {
  return NAME_BY_DISTANCE[distance]
}

export function getDistance(name) {
  return DISTANCE_BY_NAME[name]
}

export function getSelectOptions() {
  return SELECT_OPTIONS
}

export function getDistances() {
  return DISTANCES
}