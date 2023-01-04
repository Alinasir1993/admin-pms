import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const LocationTokenKey = 'Location-Token'
const LangKey = 'Admin-Lang'
const FirebaseTokenKey = 'Firebase-Token'

// SITE
export function getToken () {
  return Cookies.get(TokenKey)
}
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken () {
  return Cookies.remove(TokenKey)
}

// for location token
export function getLocationToken () {
  return Cookies.get(LocationTokenKey)
}
export function setLocationToken (token) {
  return Cookies.set(LocationTokenKey, token)
}
export function removeLocationToken () {
  return Cookies.remove(LocationTokenKey)
}

export function setLangDropdown (lang) {
  return Cookies.set(LangKey, JSON.stringify(lang))
}
export function getLangDropdown () {
  if (Cookies.get(LangKey)) {
    return JSON.parse(Cookies.get(LangKey))
  } else {
    return []
  }
}

// FIREBASE
export function getFirebaseToken () {
  return Cookies.get(FirebaseTokenKey)
}

export function setFirebaseToken (token) {
  return Cookies.set(FirebaseTokenKey, token)
}

export function removeFirebaseToken () {
  return Cookies.remove(FirebaseTokenKey)
}
