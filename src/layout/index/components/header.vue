<template>
  <header class="header">
    <bread-crumb />
  </header>
</template>

<script>
import BreadCrumb from '@/components/bread-crumb'
export default {
  components: {
    BreadCrumb,
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.header {
  height: 67px;
  padding: 10px 30px;
  background-color: --front-color;
  border-bottom: 1px solid rgba($light-color, 0.3);

  display: flex;
  align-items: center;
}
</style>