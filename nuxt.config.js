const webpack = require('webpack');
export default {
  server: {
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },   // other configs 
  vue: {
    config: {
      ignoredElements: ['grid', 'c']
    }
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'msapplication-TileColor', content: '#1b2632' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  generate: {
    fallback: "404.shtml"
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['video.js/dist/video-js.css', '@/assets/styles/main.scss'],

  styleResources: {
    scss: ['@/assets/styles/variables.scss']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/directives.js' },
    { src: '@/plugins/vue-typed-js.js' },
    { src: '@/plugins/vue-carousel.js', ssr: false },
    { src: '@/plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    vendor: ['jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ],
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
      }
    }
  }
};
