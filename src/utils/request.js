import axios from 'axios'
import { getToken } from '@/utils/cookie'

const service = axios.create({
  timeout: 30000,
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // 跨域时携带cookies
})

service.interceptors.request.use(
  config => {
    // 防止缓存，给get请求加上时间戳
    if (config.method === 'get') {
      const url = config.url
      url.indexOf('?') === -1 ? config.url = url + '?_=' + (new Date().getTime()) : config.url = url + '&_=' + (new Date().getTime())
    }
    if (!config.needToken) {
      return config
    }
    const token = getToken()
    if (!token) {
      alert('请登录')
      return Promise.reject('未登录')
    }
    config.headers['Authorization'] = token
    return config
  },
  err => Promise.reject(err)
)

service.interceptors.response.use(
  response => response.data,
  async err => {
    if (err.status = '401') {
      alert('登录过期，请重新登录')
    }
    return Promise.reject(err)
  }
)

export default service