<template>
  <div class="view">
    <helloworld msg="About Me 开发中..." />
  </div>
</template>

<script>
import helloworld from '@/components/helloworld.vue'
export default {
  name: 'Me',
  components: { helloworld },
}
</script>

<style lang="scss" scoped>
.view {
  height: 100%;
}
</style>