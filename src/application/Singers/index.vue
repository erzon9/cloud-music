<template>
  <div class="singer">
    <div class="horizen-wrapper">
      <HorizenItem
        :list="categoryTypes"
        title="分类 (默认热门):"
        :oldValue="cateOldValue"
        :handleClick="handleCateClick"
      ></HorizenItem>
      <HorizenItem
        :list="alphaTypes"
        title="首字母:"
        :oldValue="alphaOldValue"
        :handleClick="handleAlphaClick"
      ></HorizenItem>
    </div>
    <div class="singer-list">
      <BScroll
        :pullDown="singerListPullDownHandler"
        :pullUp="singerListPullUpHandler"
      >
        <SingerItem
          v-for="singer in singerList"
          :key="singer.id"
          :singerInfo="singer"
        ></SingerItem>
      </BScroll>
    </div>
  </div>
</template>

<script>
import HorizenItem from "../../baseUI/horizen-item";
import { alphaTypes, categoryTypes } from "../../api/config";
import BScroll from "../../components/scroll";
import SingerItem from "./SingerItem";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "singer"
);
// import store from "../../store";
// console.log(store);
export default {
  components: {
    HorizenItem,
    BScroll,
    SingerItem
  },
  mounted() {
    this.getHotSingerList();
  },
  data() {
    return {
      alphaTypes,
      categoryTypes,
      cateOldValue: "",
      alphaOldValue: ""
    };
  },
  computed: {
    ...mapState([
      "singerList",
      "enterLoading",
      "pullUpLoading",
      "pullDownLoading",
      "pageCount"
    ])
  },
  methods: {
    handleCateClick(item) {
      this.cateOldValue = item.key;
      console.log("click", item);
    },
    handleAlphaClick(item) {
      this.alphaOldValue = item.key;
      console.log("alpha", item);
    },
    singerListPullDownHandler() {
      console.log("pullDown");
    },
    singerListPullUpHandler() {
      console.log("pullUp");
    },
    ...mapActions(["getHotSingerList", "getSingerList"]),
    ...mapMutations(["setPageCount"])
  }
};
</script>

<style lang="less" scoped>
.singer {
  position: relative;
  .horizen-wrapper {
    margin: 3px 0;
  }
  .singer-list {
    position: fixed;
    box-sizing: border-box;
    padding: 0 5px;
    right: 0;
    left: 0;
    bottom: 0;
    top: 150px;
    overflow: hidden;
  }
}
</style>
