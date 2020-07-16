<template>
  <div class="scroll" ref="scroll">
    <div
      :class="{ content: true, 'horizental-class': direction === 'horizental' }"
    >
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
      default: () => {
        return () => {};
      }
    },
    pullUp: {
      type: Function,
      default: () => {
        console.log("pullUp");
      }
    },
    pullDown: {
      type: Function,
      default: () => {
        console.log("pullDown");
      }
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
        if (bScroll.y <= bScroll.maxScrollY + 100) {
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
  overflow: hidden;
  white-space: nowrap;

  .horizental-class {
    display: inline-block;
    padding: 0 5px;
  }
}
</style>
