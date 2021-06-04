<template>
  <div
    class="layout"
    :class="{ 'menu-active': isMenuActive }"
    @click="handleCloseMenu"
    v-waterMarker="{ text: title }"
  >
    <!-- 侧边栏菜单 -->
    <nav id="side-menu" v-if="isShowMenu" @click.stop>
      <side-menu />
    </nav>

    <!-- 主体部分 -->
    <section id="content">
      <!-- 汉堡包触发器 -->
      <hamburger
        v-if="isShowMenu"
        @click.stop.native="handleTaggleMenu"
        :class="{ active: isMenuActive }"
      />

      <!-- 内容 -->
      <app-main />
    </section>
  </div>
</template>

<script>
import SideMenu from './components/menu'
import Hamburger from '@/components/hamburger'
import AppMain from './components/main'
import { title } from '@/settings'
import { mapState } from 'vuex'
export default {
  name: 'layout',
  data() {
    return {
      title,
    }
  },
  components: {
    SideMenu,
    Hamburger,
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
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/layout';
@import '~@/styles/variables';
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: $secondary-color;
  overflow: hidden;
  #side-menu {
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    padding: 20px 0;
    background: $secondary-color;
    background: transparent;
    z-index: 99;
    overflow: hidden;
    flex-shrink: 0;
  }
  #content {
    height: 100%;
    position: relative;
    background-color: $front-color;

    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    .hamburger {
      position: absolute;
      top: 15px;
      opacity: 0.6;
      left: 15px;
    }
  }
  &.menu-active {
    #side-menu {
      width: 200px;
      overflow: auto;
    }
    #content {
      transform: translateX(200px);
      height: calc(100% - 20px);
      border-radius: 30px;
    }
  }
}
</style>