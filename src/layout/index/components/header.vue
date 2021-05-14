<template>
  <header class="header">
    <h1 class="brand">
      <router-link to="/" class="title">{{ brand }}</router-link>
      <span v-if="subtitle" style="padding: 0 15px"> · </span>
      <transition name="breadcrumb">
        <span v-if="subtitle" class="sub-title" :key="$route.path">
          {{ subtitle }}
        </span>
      </transition>
    </h1>
  </header>
</template>

<script>
export default {
  props: {
    brand: {
      type: String,
      default: '',
    },
  },
  computed: {
    subtitle() {
      if (this.$route.path === '/index') return ''
      return (this.$route.meta && this.$route.meta.title) || ''
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 67px;
  padding: 10px 30px;
  background-color: #fff;
  border-bottom: 1px solid rgba($color: #95a5aa, $alpha: 0.3);

  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    font-size: 26px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: #95a5aa;

    .title {
      font-size: 22px;
      color: #2e4c59;
      font-weight: normal;
    }
    .sub-title {
      color: #2e4c59;
    }
  }
}
</style>