<template>
  <div>
    <MainHeader ref="header" />
    <div
      v-scroll="handleScroll"
      class="page-content"
    >
      <router-view></router-view>
      <MainFooter />
    </div>
  </div>
</template>
<script>
  import MainHeader from "~/components/MainHeader";
  import MainFooter from "~/components/MainFooter";

  export default {
    name: "App",
    components: {
      MainHeader,
      MainFooter
    },
    methods: {
      handleScroll: function() {
        if (window.scrollY > 50) {
          this.$refs.header.$el.setAttribute(
            "style",
            "box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);"
          );
        } else {
          this.$refs.header.$el.setAttribute("style", "");
        }
      }
    }
  };
</script>

<style lang="scss">
.page-content {
  line-height: 1.4;
  color: $baseTextBlueBlack;
  background-color: $baseWhite;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 768px) {
  .page-content {
    line-height: 1.6;
  }
}
</style>

