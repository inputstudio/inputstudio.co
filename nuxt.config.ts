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
      htmlAttrs: {
        lang: 'fr',
      },
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
  css: ['@/assets/scss/main.scss'],
  runtimeConfig: {
    public: {
      staticAssetsEndpoint: 'https://content.inputstudio.co/assets/',
      contactFormEndpoint:
        'https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-17294e48-7d1c-4808-9722-0e3735df0619/formhandler/formhandler',
    },
  },
  modules: [
    '@hypernym/nuxt-gsap',
    '@nuxtjs/device',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/plausible',
    '@pinia/nuxt',
    'nuxt-directus',
    'nuxt-calendly',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-snackbar',
  ],
  calendly: {},
  device: {
    refreshOnResize: true,
  },
  directus: {
    url: 'https://content.inputstudio.co',
  },
  eslint: {
    lintOnStart: false,
    formatter: 'visualstudio',
  },
  googleFonts: {
    families: {
      Rubik: [200, 300, 400, 500, 600, 700, 800],
      Inter: [200, 300, 400, 500, 600, 700, 800],
    },
    download: true,
    base64: false,
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  plausible: {
    domain: 'inputstudio.co',
    apiHost: 'https://analytics.inputstudio.co',
    autoOutboundTracking: true,
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ['stores'],
  },
});
