module.exports = (ua = window.navigator.userAgent) => {
  switch (ua) {
    case 'android':
      ua = 'Mozilla/5.0 (Linux; U; Android 10; zh-cn; Redmi Note 7 Pro Build/QKQ1.190915.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4512.0 Mobile Safari/537.36 XiaoMi/MiuiBrowser/14.6.20'
      break
    case 'ios':
      ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
      break
    case 'win':
      ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36 Edg/145.0.0.0'
    default:
  }
  Object.defineProperty(navigator, 'userAgent', {
    get: () => ua
  })
}
