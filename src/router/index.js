import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index'

import { setPageTitle } from '@/utils/page'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: Layout,
    meta: {
      title: '奇思站',
      keepAlive: true
    },
    children: [
      {
        path: '',
        component: () => import('@/views/home'),
      }
    ]
  },
  {
    path: '/blog',
    component: Layout,
    meta: {
      title: '奇思笔记',
      keepAlive: false
    },
    children: [
      {
        path: '',
        component: () => import('@/views/blog/index'),
      },
      {
        path: ':id',
        component: () => import('@/views/blog/detail'),
        isHidden: true,
        meta: {
          title: '文章详情',
          keepAlive: false
        }
      }
    ],
  },
  {
    path: '/me',
    component: Layout,
    meta: {
      title: '关于我',
      keepAlive: true
    },
    children: [
      {
        path: '',
        component: () => import('@/views/me'),
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})


// 路由钩子修改页面title
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    setPageTitle(to.path === '/index' ? '' : to.meta.title)
  }
  next()
})

// 取消重复打开相同路由时控制台报错误
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
