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
    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome',
  ],

  styleResources: {
    scss: ['~/assets/css/*.scss'],
  },

  fontawesome: {
    component: 'fa',
    suffix: false,
    icons: {
      solid: ['faArrowUp', 'faPaperPlane', 'faGlobe', 'faMobile', 'faPenRuler', 'faUsersRays', 'faLaptopCode', 'faEarListen', 'faChalkboardUser'],
      brands: ['faFacebookF', 'faLinkedin', 'faGithub', 'faInstagram'],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
    // https://github.com/moritzsternemann/vue-plausible
    'vue-plausible',
    // https://axios.nuxtjs.org/
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/community-modules/tree/master/packages/toast
    '@nuxtjs/toast',
  ],

  googleFonts: {
    families: {
      'Public+Sans': [400],
      Inter: [700],
    },
    download: true,
    inject: true,
  },

  plausible: {
    domain: 'inputstudio.co',
    apiHost: 'https://analytics.inputstudio.co',
  },

  toast: {
    position: 'bottom-center',
    duration: 3000,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://nuxtjs.org/docs/features/configuration/#edit-host-and-port
  server: {
    host: '0.0.0.0', // default: localhost
  },
}
