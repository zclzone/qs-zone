<template>
  <div class="breadcrumb">
    <template v-for="(route, index) in breadList">
      <span
        v-if="index === breadList.length - 1"
        class="bread-item current"
        :key="index"
      >
        {{ route.title }}
      </span>
      <a
        v-else
        @click.prevent="handleLink(route.path)"
        class="bread-item link"
        :key="index"
        href="#"
      >
        {{ route.title }}
      </a>
    </template>
  </div>
</template>

<script>
export default {
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
    handleLink(path) {
      this.$router.replace({
        path: '/redirect' + path,
      })
    },
  },
  watch: {
    $route(route) {
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.generateBreadCrumb()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.breadcrumb {
  font-size: 16px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  .bread-item {
    font-size: 16px;
    color: $light-color;
    transition: all 0.6s;
    &.current {
      font-size: 22px;
      color: $secondary-color;
    }
    &.link:hover {
      color: $main-color;
    }
    & ~ .bread-item {
      margin-left: 30px;
      position: relative;
      &::before {
        position: absolute;
        content: '·';
        top: 0;
        left: -18px;
        color: $light-color;
      }
    }
  }
}
</style>