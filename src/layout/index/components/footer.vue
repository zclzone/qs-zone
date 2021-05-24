<template>
  <footer class="footer">
    <p><a href="http://me.qszone.com">www.qszone.com</a></p>
    <p>Designed & Powerd by <a href="http://www.qszone.com">Ronnie Zhang</a></p>
    <p>Copyright© 2021 张传龙</p>
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
  background-color: $bg-color;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
    color: $secondary-color;
    a {
      color: $main-color;
      transition: color 0.3s;
      &:hover {
        color: $light-color;
        text-decoration: underline;
      }
    }
  }
}
</style>