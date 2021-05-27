<template>
  <div
    class="layout"
    @click="handleCloseMenu"
    :class="{ [navDirection]: true, 'menu-active': isMenuActive }"
  >
    <!-- 侧边栏菜单 -->
    <nav id="side-menu" v-if="isShowMenu" @click.stop>
      <side-menu :menuList="menuList" />
    </nav>

    <!-- 主体部分 -->
    <section id="content">
      <!-- 汉堡包触发器 -->
      <hamburger
        v-if="isShowMenu"
        @click.stop.native="handleTaggleMenu"
        :class="{ [navDirection]: true, active: isMenuActive }"
      />

      <!-- 头部 -->
      <app-header v-if="isShowHeader" :brand="title" />

      <!-- 内容 -->
      <app-main />
    </section>
  </div>
</template>

<script>
import SideMenu from './components/menu'
import Hamburger from '@/components/hamburger'
import AppHeader from './components/header'
import AppMain from './components/main'
import { title } from '@/settings'
import { mapState } from 'vuex'
export default {
  name: 'layout',
  data() {
    return {
      title,
      menuList: [
        { name: '首页', link: '/' },
        { name: '奇思笔记', link: '/blog' },
        { name: '关于我', link: '/me' },
        { name: 'Contact', link: 'http://me.qszone.com', isExternal: true },
      ],
    }
  },
  components: {
    SideMenu,
    Hamburger,
    AppHeader,
    AppMain,
  },
  methods: {
    handleTaggleMenu() {
      this.$store.dispatch('app/taggleMenu')
    },
    handleCloseMenu() {
      this.$store.dispatch('app/closeMenu')
    },
  },
  computed: {
    ...mapState({
      isMenuActive: state => state.app.isMenuActive,
      isShowMenu: state => state.settings.isShowMenu,
      navDirection: state => state.settings.navDirection,
      isShowHeader: state => state.settings.isShowHeader,
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/layout';
@import '~@/styles/variables';
.layout {
  background-color: $secondary-color;
  #side-menu {
    width: 0;
    height: 100%;
    padding: 20px 0;
    background: $secondary-color;
    z-index: 99;
    overflow: hidden;
    @media screen and (max-width: 992px) {
      & {
        position: absolute;
        left: 0;
      }
    }
  }
  #content {
    flex: 1;
    position: relative;
    background-color: $front-color;

    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .hamburger {
      position: absolute;
      z-index: 100;
      top: 15px;
      &.left {
        left: 15px;
      }
      &.right {
        right: 15px;
      }
    }
  }
  &.left {
    flex-direction: row;
    #content .header {
      padding-left: 70px;
    }
  }
  &.right {
    flex-direction: row-reverse;
    #content .header {
      padding-right: 70px;
    }
  }
  &.menu-active {
    #side-menu {
      width: 200px;
      overflow: auto;
    }
    #content {
      opacity: 0.2;
    }
    &.left #content {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      .header {
        border-top-left-radius: 30px;
      }
    }
    &.right #content {
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      .header {
        border-top-right-radius: 30px;
      }
    }
    @media screen and (max-width: 992px) {
      #content {
        border-radius: 0 !important;
        .header {
          border-radius: 0 !important;
        }
      }
    }
  }
}
</style>