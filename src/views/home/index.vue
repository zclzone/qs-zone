<template>
  <div class="view" v-show="true">
    <div class="content">
      <clock />
      <search />
      <favorites />
    </div>
    <!-- 尾部：版权信息/备案信息 -->
    <app-footer :footerStyle="{ backgroundColor: 'transparent' }" />
  </div>
</template>

<script>
import clock from '@/components/clock'
import search from './components/search'
import favorites from './components/favorites'
import AppFooter from '@/components/footer'

export default {
  name: 'Home',
  components: {
    clock,
    search,
    favorites,
    AppFooter,
  },
}
</script>

<style lang="scss" scoped>
.view {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-image: linear-gradient(
    179.8deg,
    rgb(0, 116, 117) 19.2%,
    rgb(232, 232, 232) 91.3%
  );
  padding-top: 50px;
  .content {
    flex: 1;
  }
}
</style>