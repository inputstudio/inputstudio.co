<template>
  <div v-if="$device.isMobileOrTablet" class="flex flex-wrap justify-center gap-9">
    <img
      v-for="n in range(1, 7)"
      :key="technologies[n].name"
      :src="technologies[n].logo"
      :alt="technologies[n].name"
      :title="technologies[n].name"
      class="max-h-12 w-10"
    />
  </div>

  <div v-else class="flex items-center gap-9">
    <img
      v-for="technology in technologies"
      :key="technology.name"
      :src="technology.logo"
      :alt="technology.name"
      :title="technology.name"
      class="max-h-12 w-12 shrink-0 transition-transform hover:scale-110"
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

function range(start: int, end: int) {
  const ans = [];

  for (let i = start; i <= end; i++) {
    ans.push(i);
  }

  return ans;
}
</script>
