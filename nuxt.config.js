export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'js_challenge_jagaad_nick-berliner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    'nuxt-fontawesome'
  ],

  axios: {
    proxy: true,
    
      // See https://github.com/nuxt-community/axios-module#options
      // baseURL: process.env.API_URL,
      // baseURL: 'https://api.musement.com/api/v3/venues/164',
    
  },

  proxy: {
    '/api/': process.env.API_URL,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
