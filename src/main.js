import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

// import 'github-markdown-css/github-markdown.css'
import '@/styles/markdown.scss'
import 'highlight.js/styles/obsidian.css'

//mock 通过环境变量来判断是否需要加载启用
if (+process.env.VUE_APP_NEED_MOCK) {
  const { mockXHR } = require('../mock')
  mockXHR()
}

//注册全局loding组件
import loading from '@/utils/loading'
Vue.use(loading)

//全局过滤器
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

//全局自定义指令
import * as directives from './directives'
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
