<template>
  <footer class="mx-24 flex flex-col justify-center gap-10 border-t border-white py-20">
    <div class="flex justify-between">
      <div>
        <h1 class="mb-2 text-6xl font-bold uppercase 2xl:text-8xl">INPUT STUDIO</h1>
        <div class="flex gap-3">
          <NuxtLink
            v-for="(social, index) in socials"
            :key="`the-footer-social-${index}`"
            :to="social.url"
            target="_blank"
            :title="social.title"
            class="flex items-center gap-2"
          >
            <IconCSS :name="social.icon" class="text-2xl" />
            <span>{{ social.text }}</span>
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

    <div class="flex justify-center gap-10 text-customGray">
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
