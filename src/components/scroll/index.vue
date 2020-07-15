<template>
  <div class="scroll" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  props: {
    direction: {
      type: String,
      default: "vertical",
      validator(value) {
        return ["vertical", "horizental"].includes(value);
      }
    },
    click: {
      type: Boolean,
      default: true
    },
    refresh: {
      type: Boolean,
      default: true
    },
    onScroll: {
      type: Function,
      default: null
    },
    pullUp: {
      type: Function,
      default: null
    },
    pullDown: {
      type: Function,
      default: null
    },
    pullUpLoading: {
      type: Boolean,
      default: false
    },
    pullDownLoading: {
      type: Boolean,
      default: false
    },
    bounceTop: {
      type: Boolean,
      default: true
    },
    bounceBottom: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      bScroll: null
    };
  },
  mounted() {
    console.log(this);
    const {
      direction,
      click,
      // refresh,
      // pullUpLoading,
      // pullDownLoading,
      bounceTop,
      bounceBottom
    } = this;

    this.$nextTick(() => {
      this.bScroll = new BetterScroll(this.$refs.scroll, {
        scrollX: direction === "horizental",
        scrollY: direction === "vertical",
        probeType: 3,
        click,
        bounce: {
          bounceTop,
          bounceBottom
        }
      });
      this.handleEvent();
    });
  },
  methods: {
    handleEvent() {
      let bScroll = this.bScroll;
      const { pullUp, pullDown, onScroll } = this;
      this.bScroll.on("scroll", scroll => {
        onScroll(scroll);
      });
      this.bScroll.on("scrollEnd", () => {
        if (bScroll.y <= bScroll.maxSrollY + 100) {
          pullUp();
        }
      });
      this.bScroll.on("touchEnd", pos => {
        if (pos.y > 50) {
          pullDown();
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.scroll {
  height: 100%;
  width: 100%;
}
</style>
