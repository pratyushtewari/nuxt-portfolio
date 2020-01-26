<template>
  <div ref="top" v-scroll="handleScroll" class="backToTop" @click="backtotop">
    <img src="~assets/img/chevron-up.svg" />
  </div>
</template>

<script>
export default {
  name: 'VueScrollProgressBar',
  methods: {
    backtotop() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    },
    handleScroll() {
      if (window.scrollY > 400) {
        this.$el.setAttribute('style', 'display: block; bottom: 24px');
      } else {
        this.$el.setAttribute('style', 'bottom: -50px');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.backToTop {
  cursor: pointer;
  position: fixed;
  width: 36px;
  height: 36px;
  bottom: -50px;
  right: 24px;
  transition: 300ms;
  // display: none;
  background-color: aqua;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}
</style>
