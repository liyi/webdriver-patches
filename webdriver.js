module.exports = () => {
  delete navigator.__proto__.webdriver
  delete navigator.webdriver
}
