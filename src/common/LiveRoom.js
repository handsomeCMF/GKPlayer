import { getByHeader } from '@/common/js/api.js'

export async function roomList (params = {}, context) {
  const url = context.$domain + 'liveroom/list'
  var res = await getByHeader(url, params, context)
  return res
}
