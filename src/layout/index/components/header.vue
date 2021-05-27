<template>
  <header class="header">
    <h1 class="brand">
      <router-link
        @click.stop
        :to="route.path"
        class="title"
        :class="{ active: index === breadList.length - 1 }"
        v-for="(route, index) in breadList"
        :key="index"
      >
        {{ route.title }}
      </router-link>
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
  data() {
    return {
      breadList: [],
    }
  },
  created() {
    this.generateBreadCrumb()
  },
  methods: {
    generateBreadCrumb() {
      let matched = this.$route.matched
      this.breadList = matched
        .filter(route => route.meta && route.meta.title)
        .map(route => {
          return { path: route.path, title: route.meta.title }
        })
    },
  },
  watch: {
    $route() {
      this.generateBreadCrumb()
      console.log(this.breadList)
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
    font-size: 16px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    .title {
      color: #95a5aa;
      & ~ .title {
        margin-left: 30px;
        position: relative;
        &::before {
          position: absolute;
          content: '·';
          top: 0;
          left: -18px;
          color: #95a5aa;
        }
      }

      &.active {
        font-size: 22px;
        color: #2e4c59;
      }
    }
  }
}
</style>