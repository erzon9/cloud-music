<template>
  <div class="mslider">
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default {
  methods: {},
  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 100
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      });
    });
  }
};
</script>

<style lang="less" scoped>
.mslider {
  width: 100vw;

  .swiper-container {
    width: 100%;
  }
}
</style>
