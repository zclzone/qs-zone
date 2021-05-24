<template>
  <ul class="post-list">
    <li class="post-item" v-for="(item, index) in postList" :key="index">
      <div class="item-title">
        <router-link :to="'/blog/' + item.id">
          <h3 class="post-title">{{ item.title }}</h3>
        </router-link>
        <span class="post-author sm-hide">— {{ item.author }}</span>
      </div>
      <p class="post-description">{{ item.description }}</p>
      <div class="post-info">
        <span class="post-category">
          类别：
          <router-link :to="'/blog?category=' + item.category">{{
            item.category
          }}</router-link>
        </span>
        <span class="post-date sm-hide">{{
          item.createDate | timeFormatter
        }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    postList: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>


<style lang="scss" scoped>
@import '~@/styles/variables';
.post-list {
  list-style: none;
  .post-item {
    margin-top: 35px;
    padding-bottom: 10px;
    border-bottom: 1px solid $light-color;
    .item-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      .post-title {
        font-size: 24px;
        color: $secondary-color;
        &:hover {
          color: $main-color;
        }
      }
      .post-author {
        color: $secondary-color;
      }
    }
    .post-description {
      line-height: 22px;
      color: $light-color;
    }
    .post-info {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      color: $secondary-color;
      .post-category {
        a {
          font-weight: 600;
          font-size: 16px;
          color: $secondary-color;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>