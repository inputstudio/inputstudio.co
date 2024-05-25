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
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      // Cache static assets
      '/img/**': { headers: { 'cache-control': `public,max-age=${cacheTTL},s-maxage=${cacheTTL}` } },
      '/_nuxt/**': { headers: { 'cache-control': `public,max-age=${cacheTTL},s-maxage=${cacheTTL}` } },
      // Redirects
      '/careers': {
        redirect: 'https://inputstudio.notion.site/Careers-Input-Studio-a4866eda2bc54b00b0be6d94d2a3b19e?pvs=74',
      },
      '/archives ': {
        redirect: 'https://inputstudio.notion.site/Archives-Input-Studio-dbff46b2d1874678b2f78d6d51453dc4?pvs=74',
      },
    },
  },
  modules: [
    '@hypernym/nuxt-gsap',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-snackbar',
    'nuxt-marquee',
  ],
  content: {
    locales: ['fr', 'en'],
  },
  device: {
    refreshOnResize: true,
  },
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 500, 600, 700],
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
