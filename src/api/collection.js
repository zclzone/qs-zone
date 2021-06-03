import request from '@/utils/request'

// 查询登录用户的收藏夹，id信息服务端从token取
export const getCollectionByUserId = () => {
  return request({
    url: '/collection',
    method: 'get',
    needToken: true,
  })
}

// 根据id查收藏夹
export const getCollectionById = ({ id }) => {
  return request({
    url: '/collection/' + id,
    method: 'get',
  })
}

// 添加收藏夹，服务端关联用户id
export const addCollection = (data) => {
  return request({
    url: '/collection',
    method: 'post',
    needToken: true,
    data
  })
}

// 修改登录用户的收藏夹内容，id信息服务端从token取
export const updateCollection = (data) => {
  return request({
    url: '/collection',
    method: 'put',
    needToken: true,
    data
  })
}
