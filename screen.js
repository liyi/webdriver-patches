module.exports = (options = {
  width: window.screen.width,
  height: window.screen.height
}) => {
  if (options.width) {
    Object.defineProperty(screen, 'width', {
      get: () => options.width
    })
  }
  if (options.height) {
    Object.defineProperty(screen, 'height', {
      get: () => options.height
    })
  }
}
