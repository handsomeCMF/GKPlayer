
const cookieKeys = { userName: 'userName' }

var getCookie = function (cookieKey) {
  // 根据cookie的key来确定value的位置
  var allCookies = document.cookie
  var cookie = allCookies.indexOf(cookieKey)
  if (cookie !== -1) {
    var valStart = cookie + cookieKey.length + 1
    var valEnd = allCookies.indexOf(';', valStart)
    if (valEnd === -1) {
      valEnd = allCookies.length
    }
    var value = unescape(allCookies.substring(valStart, valEnd))
    return value
  }
  return ''
}

var setCookie = function (cookieKey, cookieValue) {
  var days = 1
  var maxAge = new Date()
  maxAge.setTime(maxAge.getTime() + days * 24 * 3600 * 1000)
  document.cookie = cookieKey + '=' + escape(cookieValue) + ';exprise=' + maxAge.toGMTString()
}
export { getCookie, setCookie, cookieKeys }
