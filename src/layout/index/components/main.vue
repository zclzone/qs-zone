<template>
  <main class="main">
    <app-header v-if="!$route.meta.isHiddenHeader" />
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </main>
</template>

<script>
import AppHeader from '@/components/header'

export default {
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>