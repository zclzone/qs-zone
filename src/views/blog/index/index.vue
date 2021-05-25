<template>
  <div class="view">
    <banner />
    <div class="content">
      <primary class="main" :postList="postList" :headerTitle="headerTitle" />
      <sidebar class="side-bar" :postListData="postListData" />
    </div>
    <!-- 尾部：版权信息/备案信息 -->
    <app-footer />
  </div>
</template>

<script>
import banner from '@/views/blog/components/banner'
import primary from './components/primary'
import sidebar from './components/sidebar'
import AppFooter from '@/components/footer'

import { getPosts } from '@/api/blog'
export default {
  name: 'Blog',
  components: { banner, primary, sidebar, AppFooter },
  data() {
    return {
      postListData: [],
      postList: [],
      headerTitle: '',
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      $loading.show()
      const data = await getPosts()
      $loading.hide()
      if (!data || !data.length) {
        return
      }
      this.postListData = data
        .filter(item => item.isPublish)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
      this.filterPostList()
    },
    filterPostList() {
      const { category, keyword } = this.$route.query
      if (category) {
        this.headerTitle = `类别：<i>"${category}"</i>`
        return (this.postList = this.postListData.filter(
          item => item.category === category
        ))
      }
      if (keyword) {
        this.headerTitle = `<i>"${keyword}" </i>的搜索结果`
        return (this.postList = this.postListData.filter(post => {
          return [
            post.author,
            post.title,
            post.category,
            post.description,
          ].some(item => {
            return item.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
          })
        }))
      }
      this.headerTitle = '所有文章'
      this.postList = this.postListData
    },
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler({ category, keyword }) {
        this.filterPostList()
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.view {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  //隐藏滚动条
  scrollbar-width: 0;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    background: $bg-color;

    .main {
      flex: 1;
      margin: 15px;
    }
    .side-bar {
      width: 350px;
      @media screen and (max-width: 992px) {
        display: none;
      }
    }
  }
}
</style>