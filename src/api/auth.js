import request from '@/utils/request'

// 注册
export const register = (data) => {
  return request({
    url: '/auth/register',
    method: 'post',
    data
  })
}

// 登录
export const login = (data) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

// 刷新token
export const refreshToken = (data) => {
  return request({
    url: '/auth/refreshToken',
    method: 'post',
    data
  })
}