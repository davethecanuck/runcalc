const KEYS = {
  profile: "profile",
}

export function getProfile() {
  let profile = localStorage.getItem(KEYS.profile)
  if (profile == null) {
    profile = JSON.stringify({ "birthYear": new Date().getFullYear() - 25 })
    localStorage.setItem(KEYS.profile, profile)
  }
  return JSON.parse(profile)
}

export function updateProfile(newProfile) {
  let profile = getProfile()
  profile = {...newProfile}
  localStorage.setItem(KEYS.profile, JSON.stringify(profile))
}