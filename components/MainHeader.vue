<template>
  <header class="pt-header">
    <router-link
      id="pt-logo"
      to="/"
    >
      <img
        src="~/assets/img/pratyush_logo_onlight.svg"
        alt="Pratyush Tewari Logo"
      >
    </router-link>
    <MainNavigation />
  </header>
</template>

<script>
  import MainNavigation from './MainNavigation';
  export default {
    name: "MainHeader",
    components: {
      MainNavigation
    }
  };
</script>

<style lang="scss" scoped>
.pt-header {
  position: sticky;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: $headerHeight;
  background: $baseWhite;
  transition: 300ms;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); - added upon scrolling in App.vue
  #pt-logo {
    margin: 0 0 0 5%;
    display: flex;
    flex-grow: 1;
    img {
      display: block;
      width: 80px;
    }
  }
}
</style>