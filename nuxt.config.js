const webpack = require('webpack');
export default {
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
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
