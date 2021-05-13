<template>
  <div class="view">
    <helloworld msg="奇思笔记开发中..." />
  </div>
</template>

<script>
import helloworld from '@/components/helloworld'
export default {
  name: 'Blog',
  components: { helloworld },
}
</script>

<style lang="scss" scoped>
.view {
  height: 100%;
}
</style>