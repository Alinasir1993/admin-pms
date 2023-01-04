import request from '@/utils/request'

export function getDeviceInfo(isMobileOnly, isTablet, isBrowser, isSmartTV, isWearable, isConsole, isAndroid, isWinPhone, isIOS, osName, osVersion, browserName, fullBrowserVersion) {
  let deviceType = ''
  if (isMobileOnly) {
    deviceType = 'mobile'
  } else if (isTablet) {
    deviceType = 'tablet'
  } else if (isMobileOnly) {
    deviceType = 'mobile'
  } else if (isBrowser) {
    deviceType = 'computer' // 'browser'
  } else if (isSmartTV) {
    deviceType = 'smarttv'
  } else if (isWearable) {
    deviceType = 'wearable'
  } else if (isConsole) {
    deviceType = 'console'
  }

  let deviceOSName = ''
  if (isAndroid) {
    deviceOSName = 'Android'
  } else if (isWinPhone) {
    deviceOSName = 'Windows Phone'
  } else if (isIOS) {
    deviceOSName = 'iOS'
  } else if (osName) {
    deviceOSName = osName
  }

  return {
    device_type: deviceType,
    device_os_name: deviceOSName,
    device_os_version: osVersion,
    device_browser_name: browserName,
    device_browser_version: fullBrowserVersion
  }
}

export function loginByUsername(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}



export function logout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}

export function getUserInfo(query) {
  return request({
    url: 'user-info',
    method: 'get',
    params: query
  })
}

export function roles(query) {
  return request({
    url: 'roles',
    method: 'get',
    params: query
  })
}


export function ipAddress(query) {
  return request({
    url: 'ip-address',
    method: 'get',
    params: query
  })
}

export function getRefreshCount(query) {
  return request({
    url: 'api/refresh-count',
    method: 'get',
    params: query
  })
}

export function getRefreshCountMessages(query) {
  return request({
    url: 'refresh-count/messages',
    method: 'get',
    params: query
  })
}

export function deleteFile(data) {
  return request({
    url: `api/media/delete-file`,
    method: 'delete',
    data
  })
}

export function setDeviceTokenWeb(data) {
  return request({
    url: 'api/set-device-token-web',
    method: 'post',
    params: data
  })
}

export function reLogin(data) {
  return request({
    url: 'api/re-login',
    method: 'post',
    data
  })
}


export function fetchPermissions(data){
  return request({
    url: 'permissions',
    method: 'get',
    data
  })
}

export function validateSubdomain(subdomain){
  console.log(">>> "+subdomain);
  return request({
    url: 'validate-subdomain/'+subdomain,
    method: 'get'
  })
}


export function guestSearch(query){
  return request({
    url: 'guest-search',
    method: 'get',
    params: query
  })
}