<template>
  <div>
    <!-- <MainHeader ref="header" /> -->
    <VueScrollProgressBar height="2px"  zIndex="1050"/>
    <nuxt v-scroll="handleScroll" />
    <MainFooter />
    <BackToTop />
  </div>
</template>
<script>
import MainHeader from '~/components/MainHeader';
import MainFooter from '~/components/MainFooter';
import BackToTop from '~/components/BackToTop.vue';
import VueScrollProgressBar from '~/components/VueScrollProgressBar.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
    VueScrollProgressBar,
    BackToTop
  },
  mounted() {
    this.$store.commit(
      'setIsDark',
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  },
  methods: {
    handleScroll() {
      if (this.$refs.header) {

        // if (window.scrollY > 2) {
        //   this.$refs.header.$el.setAttribute(
        //     'style',
        //     'box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);'
        //   );
        // } else {
        //   this.$refs.header.$el.setAttribute('style', '');
        // }
      }
    }
  },
  head() {
    return {
      title: 'Pratyush Tewari - Human-Computer Interaction Designer',
      meta: [
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Pratyush is a product design lead based out of New York, particularly adept at aligning cross-functional partners spanning engineering, product, and design to deliver tangible results.'
        },
        { hid: 'google', name: 'google', content: 'notranslate' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Pratyush Tewari - Human-Computer Interaction Designer'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://i.imgur.com/R3wOu1F.png'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Pratyush is a product design lead based out of New York, particularly adept at aligning cross-functional partners spanning engineering, product, and design to deliver tangible results.'
        },
        { hid: 'og:url', property: 'og:url', content: 'http://ptewari.com/' },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@uxanddesign' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Pratyush Tewari - Human-Computer Interaction Designer'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Pratyush is a product design lead based out of New York, particularly adept at aligning cross-functional partners spanning engineering, product, and design to deliver tangible results.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://i.imgur.com/R3wOu1F.png'
        }
      ]
    };
  }
};
</script>
