import axious from 'axios'
import qs from 'qs'

axious.defaults.baseURL = '/'
axious.defaults.headers.get['Content-Type'] = 'application/json'

axious.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('111')
  return config
}, function (error) {
  // 对请求错误做些什么
  console.log('111')
  return Promise.reject(error)
})

axious.interceptors.response.use(function (config) {
  // 对相应数据做些什么
  console.log('111')
  return config
}, function (error) {
  // 对相应错误做些什么
  console.log('222')
  return Promise.reject(error)
})

// post方式请求
export function post (url, params = {}, context) {
  var promise = new Promise(function (resolve, reject) {
    axious.post(url, qs.parse(params))
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.status === 200) {
            console.log(res.data.data.token)
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
// put方式
export function put (url, params = {}, context) {
  var promise = new Promise(function (resolve, reject) {
    axious.put(url, qs.parse(params))
      .then(function (res) {
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
        console.log(error)
        reject(error)
      })
  })
  return promise
}

// get方式请求 参数放在header
export function getByHeader (url, params = {}, context) {
  var promise = new Promise(function (resolve, reject) {
    axious.get(url, qs.parse(params))
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          if (res.data.status === 200) {
            resolve(res.data)
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

// get方式请求 拼接地址
export function getByUrl (url, params = {}, context) {
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
  var promise = new Promise(function (resolve, reject) {
    axious.get(url)
      .then(function (res) {
        console.log(res)
        if (res.status === 200) {
          if (res.data.status === 200) {
            resolve(res.data)
          } else {
            reject(res.data.message)
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
