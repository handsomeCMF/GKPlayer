import axious from 'axios'
import qs from 'qs'

// post方式请求
export function post (url, params = {}, context) {
  var promise = new Promise(function (resolve, reject) {
    console.log(qs.parse(params))
    axious.post(url, qs.parse(params), { headers: { 'Content-Type': 'application/json' } })
      .then(function (res) {
        console.log(res)
        if (res.status === 200) {
          if (res.data.status === 200) {
            resolve(res.data.data)
          } else {
            var mes = res.data.status + ':' + res.data.message
            reject(mes)
          }
        } else {
          reject(res.status)
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
  return promise
}

export function put (url, params = {}, context) {
  var promise = new Promise(function (resolve, reject) {
    console.log(qs.parse(params))
    axious.put(url, qs.parse(params), { headers: { 'Content-Type': 'application/json' } })
      .then(function (res) {
        console.log(res)
        if (res.status === 200) {
          if (res.data.status === 200) {
            resolve(res.data.data)
          } else {
            var mes = res.data.status + ':' + res.data.message
            reject(mes)
          }
        } else {
          reject(res.status)
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
  return promise
}

// get方式请求
export function get (url, params = {}, context) {
  var promise = new Promise(function (resolve, reject) {
    url += '?'
    const keys = Object.keys(params)
    for (let i = 0, length = keys.length; i < length; i++) {
      if (i === 0) {
        url += keys[i]
        url += '=' + params[keys[i]]
      } else {
        url += '&' + keys[i]
        url += '=' + params[keys[i]]
      }
    }
    axious.get(url)
      .then(function (res) {
        if (res.status === 200) {
          console.log(res.data)
          resolve(res.data)
        } else {
          reject(res.status)
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
  return promise
}
