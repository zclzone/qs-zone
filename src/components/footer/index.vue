<template>
  <footer class="footer">
    <p>
      Designed & Powerd by
      <a href="http://www.qszone.com"> Ronnie Zhang </a>
    </p>
    <p>Copyright© 2020-{{ new Date().getFullYear() }} 张传龙</p>
    <p>
      <a href="http://beian.miit.gov.cn/" target="_blank"
        >赣ICP备2020015008号-1</a
      >
    </p>
  </footer>
</template>


<style lang="scss" scoped>
@import '~@/styles/variables';
.footer {
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  height: 85px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
    color: $secondary-color;
    line-height: 1.5;
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