const pkg = require('./package')
const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-default/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: isProdMode ? 'https://api.bramble.wang/' : 'http://localhost:5211/api/',
    browserBaseURL: isProdMode ? 'https://api.bramble.wang/' : 'http://localhost:5211/api/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      // vueLoader.options.loaders.less = 'vue-style-loader!css-loader!less-loader'
    }
  }
}
