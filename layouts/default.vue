<template>
  <div>
    <MainHeader ref="header" />    
    <nuxt v-scroll="handleScroll"/>
    <MainFooter />
  </div>
</template>
<script>
import MainHeader from '~/components/MainHeader';
import MainFooter from '~/components/MainFooter';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  },
  mounted: function() {
    this.$store.commit(
      'setIsDark',
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > 2) {
        this.$refs.header.$el.setAttribute(
          'style',
          'box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);'
        );
      } else {
        this.$refs.header.$el.setAttribute('style', '');
      }
    }
  }
};
</script>
