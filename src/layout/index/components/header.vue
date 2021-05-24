<template>
  <header class="header" v-if="title">
    <h1 class="brand">
      <router-link @click.stop :to="$route.path" class="title">{{
        title
      }}</router-link>
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
    title() {
      return (this.$route.meta && this.$route.meta.title) || ''
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 67px;
  padding: 10px 30px;
  background-color: --front-color;
  border-bottom: 1px solid rgba(#84a59d, 0.3);

  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    font-size: 22px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: #95a5aa;

    .title {
      color: #2e4c59;
    }
  }
}
</style>