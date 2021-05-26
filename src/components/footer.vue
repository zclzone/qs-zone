<template>
  <footer class="footer">
    <p>
      Designed & Powerd by
      <a href="http://www.qszone.com"> 张传龙 </a>
      Copyright© 2020-2021
    </p>
    <p>
      <a href="http://beian.miit.gov.cn/" target="_blank"
        >赣ICP备2020015008号-1</a
      >
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';
.footer {
  width: 100%;
  height: 88px;
  padding: 10px 0;
  background-color: $front-color;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
    color: $secondary-color;
    a {
      color: $light-color;
      transition: color 0.3s;
      &:hover {
        color: $main-color;
        text-decoration: underline;
      }
    }
  }
}
</style>