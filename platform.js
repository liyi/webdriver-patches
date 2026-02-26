module.exports = (platform = window.navigator.platform) => {
  if (platform === 'android') {
    Object.defineProperty(navigator, 'platform', {
      get: () => 'Linux armv8l'
    })
    Object.defineProperty(navigator.userAgentData, 'platform', {
      get: () => 'Android'
    })
  }

  if (platform === 'ios') {
    Object.defineProperty(navigator, 'platform', {
      get: () => 'iPhone'
    })
    Object.defineProperty(navigator.userAgentData, 'platform', {
      get: () => 'iOS'
    })
  }

  if (platform === 'win') {
    Object.defineProperty(navigator, 'platform', {
      get: () => 'Win32'
    })
    Object.defineProperty(navigator.userAgentData, 'platform', {
      get: () => 'Windows'
    })
  }
}
