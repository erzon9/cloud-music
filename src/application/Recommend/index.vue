<template>
  <div class="recommend">
    <Slider :bannerList="bannerList"></Slider>
  </div>
</template>

<script>
import Slider from "@/components/slider";

export default {
  components: {
    Slider
  },
  data() {
    return {
      bannerList: []
    };
  },

  mounted() {
    this.bannerList = [1, 2, 3, 4].map(() => {
      return {
        imageUrl:
          "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
      };
    });
  }
};
</script>

<style lang="less" scoped>
.recommend {
  width: 100vw;
}
</style>
