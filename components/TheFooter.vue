<template>
  <footer class="mx-10 flex flex-col justify-center gap-10 border-t border-white py-10 md:mx-24 md:py-20">
    <div class="flex flex-col gap-8 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <h1 class="mb-8 text-5xl font-bold uppercase md:mb-2 md:text-6xl 2xl:text-8xl">INPUT STUDIO</h1>
        <div class="flex justify-center gap-6 md:justify-start md:gap-3">
          <NuxtLink
            v-for="(social, index) in socials"
            :key="`the-footer-social-${index}`"
            :to="social.url"
            target="_blank"
            :title="social.title"
            class="flex items-center gap-2"
          >
            <IconCSS :name="social.icon" class="text-4xl md:text-2xl" />
            <span class="hidden md:inline">{{ social.text }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col justify-end font-bold uppercase">
        <a v-for="page in pages" :key="`page-url-${page.name}`" :href="page.url" class="hover-underline">
          {{ page.name }}
          <IconCSS name="ic:baseline-arrow-outward" class="text-2xl" />
        </a>
      </div>
    </div>

    <div class="flex justify-center text-center text-customGray md:gap-10 md:text-left">
      <a href="#" class="hover-underline">Politique de confidentialité</a>
      <span>&copy; Copyright (c) 2023</span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const socials = [
  {
    title: 'Email',
    text: 'hello@inputstudio.co',
    url: 'mailto:hello@inputstudio.co',
    icon: 'mdi:email',
  },
  {
    title: 'Instagram',
    text: '@inputstudio',
    url: 'https://instagram.com/input.studio',
    icon: 'mdi:instagram',
  },
  {
    title: 'LinkedIn',
    text: 'input.studio',
    url: 'https://www.linkedin.com/company/inputstudio',
    icon: 'mdi:linkedin',
  },
  {
    title: 'GitHub',
    text: 'input.studio',
    url: 'https://github.com/inputstudio',
    icon: 'mdi:github',
  },
];

const pages = [
  {
    name: 'social',
    url: '#',
  },
  {
    name: 'projets',
    url: '#',
  },
  {
    name: 'carrières',
    url: '#',
  },
  {
    name: 'nous contacter',
    url: '#',
  },
];
</script>
