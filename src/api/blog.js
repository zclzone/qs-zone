import request from '@/utils/request'

export const getPosts = (params) => {
  return request({
    url: '/post',
    method: 'get',
  })
}

export const getPostById = ({ id }) => {
  return request({
    url: `/post/${id}`,
    method: 'get',
  })
}