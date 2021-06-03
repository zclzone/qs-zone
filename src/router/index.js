import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Layout from '@/layout/index'

import { setPageTitle } from '@/utils/page'


Vue.use(VueRouter)

const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/home'),
        meta: {
          title: '奇思站',
          isHiddenHeader: true,
          keepAlive: true
        },
      }
    ]
  },
  {
    path: '/blog',
    component: Layout,
    redirect: '/blog/list',
    meta: {
      title: '奇思笔记',
      keepAlive: false
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/blog/index'),
        meta: {
          title: '文章列表',
          keepAlive: false
        },
      },
      {
        path: 'list/:id',
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
    redirect: '/me/index',
    meta: {
      title: '关于我',
      keepAlive: true
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/me'),
        meta: {
          title: 'RESUME',
          keepAlive: true
        },
      }
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  }
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
  if (to.meta && to.meta.isHiddenHeader) {
    store.dispatch('settings/changeSetting', {
      isShowHeader: false,
    })
  } else {
    store.dispatch('settings/changeSetting', {
      isShowHeader: true,
    })
  }
  next()
})

// 取消重复打开相同路由时控制台报错误
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
