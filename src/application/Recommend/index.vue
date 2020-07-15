<template>
  <div class="recommend">
    <Loading v-if="loading"></Loading>
    <BScroll v-else :onScroll="onScroll" :pullDown="pullDown">
      <Slider :bannerList="bannerList"></Slider>
      <RecommendList :recommendList="recommendList"></RecommendList>
    </BScroll>
  </div>
</template>

<script>
import Slider from "@/components/slider";
import RecommendList from "./RecommendList";
import BScroll from "@/components/scroll";
import Loading from "@/components/loading";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Slider,
    RecommendList,
    BScroll,
    Loading
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["bannerList", "recommendList", "loading"])
  },
  methods: {
    ...mapActions(["changeBannerList", "changeRecommendList"]),
    onScroll(e) {
      if (e.y === 0) return;
    },
    pullDown(e) {
      console.log("pullDown", e);
    }
  },
  mounted() {
    this.changeBannerList();
    this.changeRecommendList();
  }

  // mounted() {
  //   this.bannerList = [1, 2, 3, 4].map(() => {
  //     return {
  //       imageUrl:
  //         "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
  //     };
  //   });

  //   this.recommendList = [1, 1, 1, 1, 1, 1, 1].map((item, i) => {
  //     return {
  //       id: i + "",
  //       picUrl:
  //         "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
  //       playCount: 17100,
  //       name: "朴树、许巍、李健、郑钧、老狼、赵雷"
  //     };
  //   });

  //   let x = this.recommendList.length % 3;
  //   while (x >= 0) {
  //     this.recommendList.push({});
  //     x--;
  //   }
  // }
};
</script>

<style lang="less" scoped>
.recommend {
  width: 100vw;
  height: 100%;
}
</style>
