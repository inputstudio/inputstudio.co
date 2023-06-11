// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Input Studio — Agence de développement web',
      meta: [
        {
          name: 'description',
          content:
            "Input Studio, votre agence web à Abidjan, spécialisée dans la création sur mesure de sites web et d'applications mobiles en utilisant des technologies modernes, et ce, en mode 100% remote.",
        },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },
  css: ['@/assets/scss/main.scss'],
  runtimeConfig: {
    public: {
      contactFormEndpoint:
        'https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-17294e48-7d1c-4808-9722-0e3735df0619/formhandler/formhandler',
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
