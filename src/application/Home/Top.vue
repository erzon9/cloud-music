<template>
  <div class="home-top">
    <span class="iconfont menu">&#xe6f5;</span>
    <span class="title">Web App</span>
    <span class="iconfont search">&#xe61a;</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../../assets/global-style.less";

.home-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: @theme-color;
  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
}
</style>
