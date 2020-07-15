<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slider, key) in bannerList" :key="key">
        <div class="slider-nav">
          <img :src="slider.imageUrl" width="100%" height="100%" alt="推荐" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    bannerList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  }
};
</script>

<style lang="less">
@import "../../assets/global-style.less";
.swiper {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #ffffff;

  &::before {
    content: "";
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: @theme-color;
  }

  .swiper-container {
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;

    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }

    .swiper-pagination-bullet-active {
      background: @theme-color;
    }
  }
}
</style>
