export default {
  telemetry: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'inputstudio.co',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Input Studio, votre agence web à Abidjan, spécialiste des services sur mesure pour ses clients : nous réalisons des sites web et des applications mobiles.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', type: 'image/x-icon', href: '/site.webmanifest' },
    ],
    script: [
      {
        type: 'text/javascript',
        innerHTML: `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "bydeojcf1q");`,
      },
      { src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js', type: 'module' },
      { src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js', nomodule: '' },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['~/assets/css/*.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
    // https://github.com/moritzsternemann/vue-plausible
    'vue-plausible',
  ],

  googleFonts: {
    families: {
      'Fjalla+One': true,
      Roboto: true,
    },
    download: true,
    inject: true,
  },

  plausible: {
    domain: 'inputstudio.co',
    apiHost: 'https://analytics.inputstudio.co',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
