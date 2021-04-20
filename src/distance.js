export const DISTANCE_OPTIONS = [
  { label: "400m", value: 400 },
  { label: "800m", value: 800 },
  { label: "1km", value: 1000 },
  { label: "1500m", value: 1500 },
  { label: "1600m", value: 1600 },
  { label: "1 mile", value: 1609 },
  { label: "3000m", value: 3000 },
  { label: "2 mile", value: 3219 },
  { label: "5km", value: 5000 },
  { label: "8km", value: 8000 },
  { label: "5 mile", value: 8047 },
  { label: "10km", value: 10000 },
  { label: "15km", value: 15000 },
  { label: "20km", value: 20000 },
  { label: "13.1 mile", value: 21097 },
  { label: "26.2 mile", value: 42195 },
  { label: "50km", value: 50000 }
]

// Initialize map version of DISTANCE_OPTIONS
const LABEL_BY_DISTANCE = {}

DISTANCE_OPTIONS.forEach((distance) => {
  LABEL_BY_DISTANCE[distance.value] = distance.label;
});

// Return label for the distance, or just the raw meters if not found
export function getLabel(meters) {
  let label = LABEL_BY_DISTANCE[meters];
  return label ? label : meters;
}