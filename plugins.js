module.exports = () => {
  function fakeMimeType (plugin) {
    this.description = Math.random().toString()
    this.enabledPlugin = plugin
    this.suffixes = Math.random().toString()
    this.type = Math.random().toString()
    this.__proto__ = MimeType.prototype
  }
  
  function fakePlugin () {
    this[0] = new fakeMimeType(this)
    this.description = Math.random().toString()
    this.filename = Math.random().toString()
    this.length = 1
    this.name = Math.random().toString()
    this.__proto__ = Plugin.prototype
  }
  
  function fakePluginArray (length) {
    this.length = length
    for (let n = 0; n < length; n++) {
      this[n] = new fakePlugin()
    }
    this.__proto__ = PluginArray.prototype
  }
  
  Object.defineProperty(navigator, 'plugins', {
    get: function () {
      return new fakePluginArray(5)
    }
  })  
}
