<template>
  <div>
    <MainHeader ref="header" />
    <div
      v-scroll="handleScroll"
      class="page-content"
    >
      <router-view></router-view>
    </div>
    <MainFooter />
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
        if (window.scrollY > 2) {
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

