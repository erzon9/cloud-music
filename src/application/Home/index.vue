<template>
  <div class="home">
    <Top></Top>
    <Tab></Tab>
    <router-view></router-view>
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

<style lang="less"></style>
