<template>
  <div class="list-item">
    <div class="img-wrapper" v-if="listItem.id">
      <div class="decorate">
        <div class="play-count">
          <span class="iconfont play">&#xe707;</span>
          {{ listItem.playCount | handlePlayCount }}
        </div>
      </div>
      <img v-lazy="listItem.picUrl" alt="" />
    </div>
    <p class="desc">{{ listItem.name }}</p>
    <p />
  </div>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      info: {
        id: 1,
        picUrl:
          "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
        playCount: 17171122,
        name: "朴树、许巍、李健、郑钧、老狼、赵雷"
      }
    };
  },
  filters: {
    handlePlayCount(count) {
      let len = String(count).length;
      if (len < 5) {
        return count + "次";
      } else if (len < 9) {
        return (count / 10000).toFixed(2) + "万";
      } else {
        return (count / 100000000).toFixed(2) + "亿";
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/global-style.less";
.list-item {
  margin-bottom: 10px;
  width: 32%;

  .img-wrapper {
    position: relative;
    width: 100%;
    border-radius: 3px;
    overflow: hidden;

    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      background: linear-gradient(hsla(0, 0%, 43%, 0.4), hsla(0, 0%, 100%, 0));

      .play-count {
        position: absolute;
        right: 2px;
        top: 2px;
        font-size: @font-size-s;
        line-height: 15px;
        color: @font-color-light;

        .play {
          vertical-align: top;
        }
      }
    }

    img {
      height: 100%;
      width: 100%;
    }
  }

  .desc {
    font-size: @font-size-s;
    line-height: 1.4;
    color: @font-color-desc;
    .mult-line(2);
  }
}
</style>
