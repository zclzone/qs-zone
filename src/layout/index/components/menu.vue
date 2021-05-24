<template>
  <ul class="menu">
    <li v-for="(item, index) in menuList" :key="index" @click="handleClose">
      <router-link v-if="!item.isExternal" :to="item.link">
        {{ item.title }}
      </router-link>
      <!-- 外链 -->
      <a v-else :href="item.link" target="_blank">{{ item.title }}</a>
    </li>

    <li class="last">
      <a href="https://github.com/zclzone">Wechat</a>
      <a href="https://github.com/zclzone">Github</a>
    </li>
  </ul>
</template>

<script>
const externalLinks = [
  { title: 'external', link: 'http://me.qszone.com', isExternal: true },
]
export default {
  methods: {
    generateMenuList(menuList, routes, parentPath = '') {
      routes.forEach(item => {
        if (item.meta && item.meta.title) {
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
  },
  computed: {
    menuList() {
      let menuList = []
      this.generateMenuList(menuList, this.$router.options.routes)
      return menuList.concat(externalLinks)
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
    &.last {
      margin-top: auto;
      a {
        font-size: 12px;
        font-weight: 400;
        & + a {
          margin-left: 15px;
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