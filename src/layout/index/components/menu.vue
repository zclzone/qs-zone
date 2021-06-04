<template>
  <ul class="menu">
    <li v-for="(item, index) in menuList" :key="index" @click="handleClose">
      <router-link v-if="!item.isExternal" :to="item.link">
        {{ item.title }}
      </router-link>
      <!-- 外链 -->
      <a v-else :href="item.link" target="_blank">{{ item.title }}</a>
    </li>

    <li class="last" v-if="isLogged">
      <a v-if="isLogged">
        <img src="@/assets/images/author.jpg" alt="" />
      </a>
      <a href="#" @click.prevent="logout">退出</a>
    </li>
    <li class="last" v-else>
      <a>
        <img src="@/assets/images/avartar.png" alt="" />
      </a>
      <a href="#" @click.prevent="login">登录</a>
    </li>
  </ul>
</template>

<script>
const homeLink = [{ title: '首页', link: '/' }]
const externalLinks = [
  { title: 'external', link: 'http://blog.qszone.com', isExternal: true },
]
import { getToken, removeToken } from '@/utils/cookie'
export default {
  methods: {
    generateMenuList(menuList, routes, parentPath = '') {
      routes.forEach(item => {
        if (!item.isHidden && item.meta && item.meta.title) {
          menuList.push({
            link: parentPath + item.path,
            title: item.meta.title,
          })
        }
        if (item.children && item.children.length) {
          this.generateMenuList(menuList, item.children, parentPath + item.path)
        }
      })
      return menuList
    },
    handleClose() {
      this.$store.dispatch('app/closeMenu')
    },
    login() {
      this.$store.dispatch('app/closeMenu')
      this.$router.push('/login')
    },
    logout() {
      removeToken()
      this.$store.dispatch('app/closeMenu')
      this.$router.replace('/login')
    },
  },
  computed: {
    menuList() {
      return homeLink.concat(
        this.$router.options.routes
          .filter(route => !route.isHidden && route.meta && route.meta.title)
          .map(route => ({ link: route.path, title: route.meta.title }))
        // .concat(externalLinks)
      )
    },
    isLogged() {
      return !!getToken()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.menu {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  //隐藏滚动条
  // scrollbar-width: 0;
  // -ms-overflow-style: none;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
  li {
    display: flex;
    margin: 10px auto;
    padding: 0 15px;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 600;
    &.last {
      width: 100%;
      margin-top: auto;
      margin-bottom: 0;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      a {
        display: block;
        width: 40px;
        font-weight: 600;
        margin: 0 15px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }
    a {
      text-transform: uppercase;
      transition: color 0.3s;
      color: $front-color;
      &:hover {
        color: $light-color;
        text-decoration: underline;
      }
    }
  }
}
</style>