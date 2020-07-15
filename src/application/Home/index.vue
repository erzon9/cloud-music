<template>
  <div class="home">
    <Top></Top>
    <Tab></Tab>
    <div class="router-view-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Top from "./Top";
import Tab from "./Tab";
export default {
  components: {
    Top,
    Tab
  }
};
</script>

<style lang="less">
.home {
  display: flex;
  height: 100vh;
  flex-direction: column;

  .router-view-wrap {
    flex: 1;
    overflow: hidden;
  }
}
</style>
