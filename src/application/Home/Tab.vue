<template>
  <div class="home-tab">
    <router-link to="/recommend" class="selected">
      <span>推荐</span>
    </router-link>
    <router-link to="/singers">
      <span>歌手</span>
    </router-link>
    <router-link to="/rank">
      <span>排行榜</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../../assets/global-style.less";

.home-tab {
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: @theme-color;
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    display: flex;
    align-items: center;
    justify-content: center;

    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
}
</style>
