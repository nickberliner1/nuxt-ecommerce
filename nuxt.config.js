export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Nick Berliner',
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
    'nuxt-fontawesome',
    'bootstrap-vue/nuxt',
    'nuxt-buefy',
    
  ],

  axios: {
    proxy: true,
    
  },

  

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: '/dist/',
    target: 'static'
  },

  
}
