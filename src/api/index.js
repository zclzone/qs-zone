import request from '@/utils/request'

export const hello = (params) => {
  return request({
    url: '/',
    method: 'get',
    params
  })
}