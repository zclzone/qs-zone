<template>
  <div class="detail-container">
    <div class="post-container" v-if="post">
      <article class="post-content">
        <header class="post-header">
          <h1 class="post-title">{{ post.title }}</h1>
        </header>
        <section
          class="markdown-here-wrapper"
          v-html="postHtml"
          v-highlight
        ></section>
      </article>
    </div>
  </div>
</template>

<script>
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
  async mounted() {
    await this.getPost()
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
  flex: 1;
  overflow: auto;
  background: $bg-color;
  padding: 20px 0;
  scrollbar-width: 0;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .post-container {
    width: 100%;
    max-width: 1170px;
    background: $front-color;
    margin: 0 auto;
    position: relative;
    .post-content {
      padding: 35px;
      position: relative;
      width: 100%;
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