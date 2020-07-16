<template>
  <div class="singer-item">
    <div class="img-wrapper">
      <img :src="singerInfo.picUrl" alt="" />
    </div>
    <div class="name">
      {{ singerInfo.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    singerInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/global-style.less";

.singer-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid @border-color;

  .img-wrapper {
    margin-right: 10px;
    img {
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }
  }
}
</style>
