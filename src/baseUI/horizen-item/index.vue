<template>
  <BScroll class="horizen-item" direction="horizental">
    <div class="wrapper">
      <div class="list">
        <span class="list-title">{{ title }}</span>
        <span
          :class="{ 'list-item': true, selected: oldValue === item.key }"
          v-for="item in list"
          :key="item.key"
          @click="handleClick(item)"
          >{{ item.name }}</span
        >
      </div>
    </div>
  </BScroll>
</template>

<script>
import BScroll from "../../components/scroll";
export default {
  components: {
    BScroll
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    oldValue: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    handleClick: {
      type: Function,
      default: () => {
        return () => {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/global-style.less";

.horizen-item {
  display: flex;
  padding: 2px 0;
  .wrapper {
    .list {
      .list-title {
        font-size: @font-size-m;
        padding: 3px 0;
        margin-right: 5px;
        color: grey;
      }
      .list-item {
        display: inline-block;
        padding: 3px;
        margin-right: 2px;
        font-size: @font-size-m;
        border: 1px solid transparent;

        &.selected {
          border: 1px solid @theme-color;
          opacity: 0.8;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
