module.exports = (languages = ['zh-CN', 'en-US']) => {
  Object.defineProperty(navigator, 'languages', {
    get: () => languages
  })
}
