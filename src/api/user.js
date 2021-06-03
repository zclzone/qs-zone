import request from '@/utils/request'

// 查询所有用户
export const getUsers = (data) => {
  return request({
    url: '/users',
    method: 'get',
    data
  })
}

// 查找用户信息，id信息服务端从token取
export const getUserInfo = (data) => {
  return request({
    url: '/user',
    method: 'get',
    data
  })
}

// 删除用户，id信息服务端从token取
export const removeUser = (data) => {
  return request({
    url: '/user',
    method: 'delete',
    data
  })
}
