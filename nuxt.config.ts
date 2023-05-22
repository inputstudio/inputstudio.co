// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Input Studio',
      meta: [{ name: 'description', content: 'My awesome Nuxt project' }],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  css: ['@/assets/scss/main.scss'],
  runtimeConfig: {
    public: {
      contactFormEndpoint: '',
    },
  },
  modules: [
    '@nuxtjs/device',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    'nuxt-calendly',
    'nuxt-headlessui',
    'nuxt-icon',
  ],
  calendly: {},
  device: {
    refreshOnResize: true,
  },
  eslint: {
    lintOnStart: false,
    formatter: 'visualstudio',
  },
  googleFonts: {
    families: {
      Rubik: [300, 400, 500, 700],
      Inter: [300, 400, 500, 700],
    },
    download: true,
    base64: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
