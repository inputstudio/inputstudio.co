<template>
  <div class="flex gap-9 md:items-center" :class="{ 'moving-text': $device.isMobileOrTablet }">
    <img
      v-for="technology in technologies"
      :key="technology.name"
      :src="technology.logo"
      :alt="technology.name"
      :title="technology.name"
      class="tech-logo max-h-12 w-10 md:w-12 md:shrink-0 md:transition-transform md:hover:scale-110"
    />
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck 2307
import awsLogo from '@/assets/img/aws.svg';
import azureLogo from '@/assets/img/azure.svg';
import doLogo from '@/assets/img/do.svg';
import figmaLogo from '@/assets/img/figma.svg';
import flutterLogo from '@/assets/img/flutter.svg';
import gcpLogo from '@/assets/img/gcp.svg';
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
    name: 'Microsoft Azure',
    logo: azureLogo,
  },
  {
    name: 'Amazon Web Services',
    logo: awsLogo,
  },
  {
    name: 'Google Cloud Platform',
    logo: gcpLogo,
  },
  {
    name: 'DigitalOcean',
    logo: doLogo,
  },
];
</script>

<style lang="scss">
/* The animation */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* media query to enable animation for only those who want it */
@media (prefers-reduced-motion: no-preference) {
  .moving-text {
    width: 230vw;
    animation: marquee 12s linear infinite backwards;
  }
}
</style>
