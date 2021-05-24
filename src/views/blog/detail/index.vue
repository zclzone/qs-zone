<template>
  <div class="detail-container">
    <div class="post-container" v-if="post">
      <article class="post-content">
        <header class="post-header">
          <h1 class="post-title">{{ post.title }}</h1>
        </header>
        <section class="markdown-body post-body" v-html="postHtml"></section>
      </article>
      <i class="qs-icon i-close" @click="handleClose"></i>
    </div>
  </div>
</template>

<script>
import { setPageTitle } from '@/utils/page'
import MarkdownIt from 'markdown-it'

import { getPostById } from '@/api/blog'
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: null,
      postHtml: '',
    }
  },
  mounted() {
    this.getPost()
    setPageTitle((this.post && this.post.title) || '')
  },
  methods: {
    async getPost() {
      $loading.show()
      const data = await getPostById({ id: this.id })
      $loading.hide()
      this.post = data
      const md = new MarkdownIt()
      this.postHtml = md.render(this.post.content)
    },
    handleClose() {
      this.$router.push('/blog')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.detail-container {
  width: 100%;
  min-height: 100%;
  background: $bg-color;
  padding: 20px 0;
  .post-container {
    width: 100%;
    max-width: 1170px;
    background: $front-color;
    margin: 0 auto;
    position: relative;
    .i-close {
      font-size: 30px;
      position: absolute;
      right: 15px;
      top: 15px;
      color: $light-color;
      background: $front-color;
      border: 1px solid rgba($color: $light-color, $alpha: 0.3);
      border-radius: 5px;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        color: $main-color;
        background-color: $bg-color;
      }
    }
    .post-content {
      padding: 50px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 5px;
        height: 80px;
        background: $main-color;
      }
      .post-header {
        margin-bottom: 30px;
        text-align: center;
        .post-title {
          font-size: 30px;
          color: $main-color;
          padding-bottom: 20px;
          border-bottom: 1px solid $light-color;
        }
      }
    }
  }
}
</style>