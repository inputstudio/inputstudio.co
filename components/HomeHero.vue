<template>
  <section class="mb-12 flex flex-col items-center gap-8 2xl:gap-14">
    <h1 id="animated-title" class="flex cursor-pointer gap-3 text-center text-8xl font-bold leading-normal">
      <div id="design">Design.</div>
      <div id="code">Code.</div>
      <div id="cloud">Cloud.</div>
    </h1>
    <p class="text-center text-xl font-light md:w-1/2 2xl:text-2xl">
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
import gsap from 'gsap';
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

useNuxtApp().hook('page:finish', () => {
  const code = document.querySelector('#code');
  const cloud = document.querySelector('#cloud');
  const tl = gsap.timeline();
  tl.from(code, { x: -100, ease: 'elastic.out', duration: 1 });
  tl.to(cloud, { y: -100, autoAlpha: 0, ease: 'power1.out', duration: 2 });
  tl.to(cloud, { y: 0, autoAlpha: 1, ease: 'power2.inOut' });

  document.querySelector('#animated-title')?.addEventListener('mouseenter', () => {
    if (!tl.isActive()) {
      tl.play(0);
    }
  });
});

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

<style lang="scss">
#design {
  background: linear-gradient(90deg, #ff0000, #ff7300, #002bff, #7a00ff, #ff00c8, #ff0000);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% auto;
  animation: gradient 30s linear infinite;
}

@keyframes gradient {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
