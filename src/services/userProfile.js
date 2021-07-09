const KEYS = {
  profile: "profile",
  birthYear: "birthYear",
  gender: "gender",
}

const DEFAULT_AGE = 25

export function getProfile() {
  let profile = JSON.parse(localStorage.getItem(KEYS.profile) || "{}")
  let didUpdate = false

  if (!profile[KEYS.birthYear]) {
    profile[KEYS.birthYear] = new Date().getFullYear() - DEFAULT_AGE 
    didUpdate = true
  }
  if (!profile[KEYS.gender]) {
    profile[KEYS.gender] = 'other'
    didUpdate = true
  }

  if (didUpdate) {
    saveProfile(profile)
  }
  return profile
}

export function saveProfile(profile) {
  localStorage.setItem(KEYS.profile, JSON.stringify(profile))
}