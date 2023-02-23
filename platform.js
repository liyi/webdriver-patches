module.exports = (platform = window.navigator.platform) => {
  if (platform === 'android') platform = 'Linux armv8l'
  if (platform === 'ios') platform = 'iPhone'
  Object.defineProperty(navigator, 'platform', {
    get: () => platform
  })  
}
