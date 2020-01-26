<template>
  <div
    class="twentytwenty-container"
    :style="containerStyle"
    @touchstart="startSlide"
    @mousedown="startSlide"
  >
    <img :src="after" alt="after" @mousedown.prevent @load="setDimensions" />
    <img
      :src="before"
      alt="before"
      :style="beforeImgStyle"
      @mousedown.prevent
    />
    <div class="twentytwenty-overlay" :style="overlayStyle">
      <div v-if="beforeLabel" class="twentytwenty-before-label">
        {{ beforeLabel }}
      </div>
      <div v-if="afterLabel" class="twentytwenty-after-label">
        {{ afterLabel }}
      </div>
    </div>
    <div class="twentytwenty-handle" :style="handleStyle">
      <div class="twentytwenty-arrow-left"></div>
      <div class="twentytwenty-arrow-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwentyTwenty',
  props: {
    before: {
      type: String,
      required: true
    },
    beforeLabel: {
      type: String
    },
    after: {
      type: String,
      required: true
    },
    afterLabel: {
      type: String
    },
    offset: {
      type: [String, Number],
      default: 0.5,
      validator: value => {
        return value > 0 && value <= 1;
      }
    }
  },
  data() {
    return {
      imgOffset: null,
      slideOffset: this.offset,
      sliding: false,
      containerStyle: {},
      overlayStyle: {}
    };
  },
  computed: {
    beforeImgStyle() {
      return { clip: `rect(0, ${this.x}px, ${this.h}px, 0)` };
    },
    handleStyle() {
      const size = 40;
      return {
        width: `${size}px`,
        height: `${size}px`,
        top: `calc(50% - ${size / 2}px)`,
        left: `calc(${this.slideOffset * 100}% - ${size / 2}px)`
      };
    },
    x() {
      return this.w * this.slideOffset;
    },
    w() {
      if (this.imgOffset) return this.imgOffset.width;
    },
    h() {
      if (this.imgOffset) return this.imgOffset.height;
    }
  },
  mounted() {
    document.addEventListener('touchmove', this.moveSlide);
    document.addEventListener('touchend', this.endSlide);
    document.addEventListener('mousemove', this.moveSlide);
    document.addEventListener('mouseup', this.endSlide);
    window.addEventListener('resize', this.resize);
  },
  beforeDestroy() {
    document.removeEventListener('touchmove', this.moveSlide);
    document.removeEventListener('touchend', this.endSlide);
    document.removeEventListener('mousemove', this.moveSlide);
    document.removeEventListener('mouseup', this.endSlide);
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    setDimensions() {
      const img = this.$el.querySelector('img');
      this.imgOffset = img.getBoundingClientRect();
      this.containerStyle = { width: `${this.w + 8}px`, height: `${this.h}px` };
    },
    startSlide(event) {
      this.sliding = true;
      this.moveSlide(event);
      this.overlayStyle = { opacity: 0 };
    },
    moveSlide(event) {
      if (this.sliding) {
        var x =
          (event.touches ? event.touches[0].pageX : event.pageX) -
          this.imgOffset.left;
        x = x < 0 ? 0 : x > this.w ? this.w : x;
        this.slideOffset = x / this.w;
      }
    },
    endSlide() {
      this.sliding = false;
      this.overlayStyle = {};
    },
    resize() {
      this.containerStyle = {};
      this.$nextTick(() => this.setDimensions());
    }
  }
};
</script>
<style lang="scss" scoped>
.twentytwenty-container {
  position: relative;
  overflow: hidden;
  box-sizing: content-box;
  img {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    user-select: none;
    z-index: 20;
  }

  .twentytwenty-overlay {
    z-index: 25;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.5s;

    .twentytwenty-before-label,
    .twentytwenty-after-label {
      user-select: none;
      position: absolute;
      font-size: 0.8em;
      top: calc(50% - 0.4em - 5px);
      padding: 10px;
      background: rgba(255, 255, 255, 0.4);
      color: white;
    }
    .twentytwenty-before-label {
      left: 0;
    }
    .twentytwenty-after-label {
      right: 0;
    }
  }
  &:hover > .twentytwenty-overlay {
    opacity: 1;
  }
  .twentytwenty-handle {
    cursor: col-resize;
    z-index: 30;
    position: absolute;
    background: none;
    border: 4px solid $baseRed;
    border-radius: 50px;
    margin-left: -4px;
    margin-top: -4px;
    user-select: none;
    line-height: 40px;
    text-align: center;

    &:before,
    &:after {
      content: '';
      border: 2px solid $baseRed;
      height: 9999px;
      position: absolute;
      left: calc(50% - 2px);
    }
    &:before {
      top: 40px;
    }
    &:after {
      bottom: 40px;
    }
  }
  .twentytwenty-arrow-right,
  .twentytwenty-arrow-left {
    user-select: none;
    position: relative;
    width: 0;
    height: 0;
    display: inline-block;
  }
  .twentytwenty-arrow-right {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid $baseRed;
  }
  .twentytwenty-arrow-left {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid $baseRed;
  }
}
</style>
