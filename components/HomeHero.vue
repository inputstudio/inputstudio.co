<template>
  <section class="mb-12 flex flex-col items-center gap-14">
    <h1 class="text-center text-9xl font-bold">Design. Code. Cloud.</h1>
    <p class="text-center text-2xl font-light md:w-1/2">
      Des idées créatives, une expertise technique et une infrastructure cloud de pointe. Notre agence web a tout ce
      dont vous avez besoin.
    </p>
    <div class="flex items-center gap-9">
      <img
        v-for="technology in technologies"
        :key="technology.name"
        :src="technology.logo"
        :alt="technology.name"
        class="max-h-12 w-12 shrink-0"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import awsLogo from '@/assets/img/aws.svg';
import azureLogo from '@/assets/img/azure.svg';
import doLogo from '@/assets/img/do.svg';
import figmaLogo from '@/assets/img/figma.svg';
import flutterLogo from '@/assets/img/flutter.svg';
import gcpLogo from '@/assets/img/gcp.svg';
import ghostLogo from '@/assets/img/ghost.svg';
import laravelLogo from '@/assets/img/laravel.svg';
import nextLogo from '@/assets/img/next.svg';
import nuxtLogo from '@/assets/img/nuxt.svg';
import reactLogo from '@/assets/img/react.svg';
import sketchLogo from '@/assets/img/sketch.svg';
import tailwindLogo from '@/assets/img/tailwind.svg';
import vueLogo from '@/assets/img/vue.svg';

const technologies = [
  {
    name: 'Figma',
    logo: figmaLogo,
  },
  {
    name: 'Sketch',
    logo: sketchLogo,
  },
  {
    name: 'Vue.js',
    logo: vueLogo,
  },
  {
    name: 'Nuxt.js',
    logo: nuxtLogo,
  },
  {
    name: 'React.js',
    logo: reactLogo,
  },
  {
    name: 'Next.js',
    logo: nextLogo,
  },
  {
    name: 'Ghost',
    logo: ghostLogo,
  },
  {
    name: 'Tailwind CSS',
    logo: tailwindLogo,
  },
  {
    name: 'Laravel',
    logo: laravelLogo,
  },
  {
    name: 'Flutter',
    logo: flutterLogo,
  },
  {
    name: 'Azure',
    logo: azureLogo,
  },
  {
    name: 'AWS',
    logo: awsLogo,
  },
  {
    name: 'Google Cloud',
    logo: gcpLogo,
  },
  {
    name: 'Digital Ocean',
    logo: doLogo,
  },
];
</script>
