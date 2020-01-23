<template>
  <header class="pt-header">
    <div id="pt-logo">
      <nuxt-link to="/">
        <span class="main-logo" alt="Pratyush Tewari Logo"></span>
      </nuxt-link>
    </div>
    <MainNavigation />
  </header>
</template>

<script>
import MainNavigation from './MainNavigation';
export default {
  name: 'MainHeader',
  components: {
    MainNavigation
  },
  methods: {
    getImgUrl() {
      const url = this.$store.state.isDark
        ? require('@/assets/img/pratyush_logo_ondark.svg')
        : require('@/assets/img/pratyush_logo_onlight.svg');
      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
.pt-header {
  z-index: 1000;
  position: sticky;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: getColor(baseBackground);
  color: getColor(baseText);
  transition: 300ms;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); - added upon scrolling in App.vue
  #pt-logo {
    margin: 0 0 0 5%;
    display: flex;
    flex-grow: 1;
    a {
      display: flex;
    }
    .main-logo {
      display: block;
      width: 60px;
    }
  }
}
@media only screen and (min-width: 768px) {
  .pt-header {
    height: 60px;
    #pt-logo {
      .main-logo {
        width: 80px;
      }
    }
  }
}
</style>
