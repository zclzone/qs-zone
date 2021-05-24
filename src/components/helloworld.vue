<template>
  <div class="content" v-if="msg">
    <h1 v-text="msg"></h1>
    <p>{{ curDate | timeFormatter }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      curDate: new Date(),
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      setInterval(() => {
        this.curDate = new Date()
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h1 {
    color: $main-color;
  }
  p {
    font-size: 16px;
    color: $light-color;
    line-height: 35px;
  }
}
@media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
  .content {
    background-image: -webkit-linear-gradient(
      left bottom,
      $light-color,
      $main-color 25%,
      $light-color 50%,
      $main-color 75%,
      $light-color
    );
    animation: masked-animation 4s infinite linear;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 200% 100%;
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 4s infinite linear;
  }
}
@keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
@-webkit-keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>