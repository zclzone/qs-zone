<template>
  <article class="secondary">
    <section class="post-search">
      <div class="search">
        <input
          type="text"
          v-model="keyword"
          placeholder="输入关键字"
          @keyup.enter="search"
        />
        <button class="btn-search qs-icon i-search" @click="search"></button>
      </div>
      <div class="search-category">
        <router-link
          class="category-link"
          :to="'/blog?category=' + key"
          :key="key"
          v-for="(value, key) in categories"
          >{{ key }}</router-link
        >
      </div>
    </section>
    <section class="about-author">
      <div class="author-avatar">
        <a href="https://github.com/zclzone" target="_blank">
          <img src="@/assets/images/author.jpg" alt />
        </a>
      </div>

      <h2 class="author-name">{{ author }}</h2>
      <p class="author-introduction">[ {{ description }} ]</p>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    postListData: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      skills: [
        'Vue',
        'React',
        'JavaScript',
        'Css',
        'Java',
        'C#',
        'MySql',
        'Sql Server',
        'MongoDB',
      ],
      author: '张传龙',
      description: '前端全栈开发者',
      github: 'https://github.com/zclzone/blog',
      colors: ['#005387'],
      keyword: '',
      activeName: 'recent',
    }
  },
  methods: {
    randomColor() {
      return this.colors[Math.floor(Math.random() * 10)]
    },
    search() {
      if (this.keyword) {
        this.$router.push({
          path: '/article',
          query: { keyword: this.keyword },
        })
      } else {
        this.$router.push({ path: '/article' })
      }
    },
    handleClick(tab) {},
  },
  computed: {
    categories() {
      let categories = {}
      this.postListData.forEach(item => {
        categories[item.category] = item.category
      })
      return categories
    },
    recentList() {
      return this.postListData.slice(0, 10)
    },
    recommendList() {
      return this.postListData.filter(item => item.isRecommend)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.secondary {
  width: 100%;
  background: $front-color;
  margin: 15px 0;
  section {
    border-radius: 5px;
    padding: 16px;
  }
  .about-author {
    text-align: center;
    .author-avatar {
      img {
        max-width: 80px;
        max-height: 80px;
        border-radius: 50%;
        transition: all 0.8s;
        &:hover {
          transform: scale(1.08);
        }
      }
    }
    .author-name {
      color: var(--main-color);
      line-height: 35px;
    }
    .author-introduction {
      line-height: 30px;
      color: $secondary-color;
    }
    .el-divider {
      margin: 34px 0;
      .el-divider__text {
        color: $light-color;
      }
    }
    .contact-me {
      display: flex;
      height: 25px;
      line-height: 25px;
      justify-content: center;
      .myIcon {
        margin: 0 20px;
        font-size: 18px;
      }
      .weixin {
        position: relative;
        &:hover img {
          display: block;
        }
        img {
          width: 120px;
          display: none;
          position: absolute;
          left: 50%;
          margin-left: -60px;
          top: 25px;
          z-index: 999;
        }
      }
    }
  }
  .post-search {
    .search {
      height: 35px;
      position: relative;
      display: flex;
      align-items: center;
      input {
        height: 100%;
        width: calc(100% - 28px);
        padding: 0 10px;
        color: $light-color;
        font-size: 14px;
        border: 1px solid $light-color;
        border-right: none;
        border-radius: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        &::-webkit-input-placeholder {
          color: $light-color;
        }
        &:focus {
          color: $secondary-color;
          &::-webkit-input-placeholder {
            color: $secondary-color;
          }
        }
      }
      .btn-search {
        position: absolute;
        width: 30px;
        height: 100%;
        top: 0;
        right: 0;
        border: none;
        color: $front-color;
        font-size: 18px;
        background: $main-color;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        outline: none;
        cursor: pointer;
      }
    }
    .el-divider {
      margin: 25px 0;
      .el-divider__text {
        color: $light-color;
      }
    }
    .search-category {
      margin-top: 25px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background: $bg-color;
      border-radius: 5px;
      padding: 5px;
      .category-link {
        font-size: 14px;
        margin: 5px;
        color: $secondary-color;
        font-weight: 600;
        &:hover {
          text-decoration: underline;
          color: $main-color;
        }
      }
    }
  }
  .post-tab {
    a {
      color: $secondary-color;
      display: block;
      margin-bottom: 5px;
      :hover {
        color: $main-color;
        text-decoration: underline;
      }
    }
  }
}
</style>