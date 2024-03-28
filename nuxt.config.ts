const cacheTTL = 60 * 60 * 24 * 365; // 1 year

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
  css: ['@/assets/scss/main.scss'],
  runtimeConfig: {
    botApiKey: '',
    chatId: '',
    public: {
      staticAssetsEndpoint: 'https://content.inputstudio.co/assets/',
    },
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/img/**': { headers: { 'cache-control': `public,max-age=${cacheTTL},s-maxage=${cacheTTL}` } },
      '/_nuxt/**': { headers: { 'cache-control': `public,max-age=${cacheTTL},s-maxage=${cacheTTL}` } },
    },
  },
  modules: [
    '@hypernym/nuxt-gsap',
    '@nuxt/content',
    '@nuxtjs/device',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-snackbar',
  ],
  content: {
    locales: ['fr', 'en'],
  },
  device: {
    refreshOnResize: true,
  },
  eslint: {
    lintOnStart: false,
    formatter: 'visualstudio',
  },
  googleFonts: {
    families: {
      'DM Sans': [100, 300, 400, 500, 600, 700],
    },
    download: true,
    base64: false,
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    detectBrowserLanguage: {
      useCookie: false,
    },
  },
  plausible: {
    domain: 'inputstudio.co',
    apiHost: 'https://analytics.inputstudio.co',
    autoOutboundTracking: true,
  },
  site: {
    url: 'https://inputstudio.co',
  },
});
