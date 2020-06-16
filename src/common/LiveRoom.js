import { getByHeader, getByUrl, put } from '@/common/js/api.js'

export async function roomList (params = {}, context) {
  const url = context.$domain + 'liveroom/list'
  var res = await getByHeader(url, params, context)
  return res
}

export async function getOwnerRoom (params = {}, context) {
  const url = context.$domain + 'liveroom'
  var res = await getByUrl(url, params, context)
  return res
}

export async function getUserRoom (params = {}, context) {
  const url = context.$domain + 'user/liveroom'
  var res = await getByUrl(url, params, context)
  return res
}

export async function startLive (context) {
  const url = context.$domain + 'liveroom/start'
  var res = await put(url, context)
  return res
}

export async function setTitle (params, context) {
  const url = context.$domain + 'liveroom'
  var res = await put(url, params, context)
  return res
}

export async function setCoverImage (params, context) {
  const url = context.$domain + 'liveroom/cover-image'
  var res = await put(url, params, context)
  return res
}
