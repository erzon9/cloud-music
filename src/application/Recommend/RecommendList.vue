<template>
  <div class="recommend-list">
    <h3 class="title">推荐歌单</h3>
    <div class="list-wrapper">
      <ListItem
        v-for="item in recommendList"
        :key="item.id"
        :listItem="item"
      ></ListItem>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  components: {
    ListItem
  },
  props: {
    recommendList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.recommend-list {
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 50px;
  }

  .list-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
}
</style>
