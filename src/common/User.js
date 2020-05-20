import { post, put } from '@/common/js/api.js'

export async function login (params = {}) {
  const url = 'api/v1/user/login'
  var response = await put(url, params)
  return response
}

export async function register (params = {}) {
  const url = 'api/v1/user/regist'
  var response = await post(url, params)
  return response
}
