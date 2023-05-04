<template>
  <section class="mb-12 flex flex-col items-center gap-8 2xl:gap-14">
    <h1
      id="animated-title"
      class="flex flex-col gap-4 text-center font-bold leading-normal md:cursor-pointer md:flex-row"
    >
      <!-- Those bottom padding were added because the "g" in "design" is partially cut at the bottom without them -->
      <!-- And those on the others words are just for alignment with "design" -->
      <div id="design" class="pb-1 text-6xl md:pb-2 md:text-8xl">Design.</div>
      <div id="code" class="text-5xl md:pb-2 md:text-8xl">Code.</div>
      <div id="deploy" class="text-4xl md:pb-2 md:text-8xl">Deploy.</div>
    </h1>
    <p class="text-center font-light md:w-1/2 md:text-xl 2xl:text-2xl">
      Des idées créatives, une expertise technique et une infrastructure cloud de pointe. Notre agence web a tout ce
      dont vous avez besoin.
    </p>
    <div class="flex items-center gap-9">
      <img
        v-for="technology in technologies"
        :key="technology.name"
        :src="technology.logo"
        :alt="technology.name"
        :title="technology.name"
        class="max-h-12 w-12 shrink-0 transition-transform hover:scale-110"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import SplitText from 'split-type';
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
  const design = new SplitText('#design', { types: 'chars' });
  const designChars = design.chars;
  const code = document.querySelector('#code');
  const deploy = document.querySelector('#deploy');
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
    },
  });
  tl.fromTo(designChars, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05, ease: 'power2.inOut' });
  // FIXME: Code animation can be improved. Why not using a "typing" animation.
  tl.fromTo(code, { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power2.out' });
  tl.to(deploy, { y: -100, autoAlpha: 0, ease: 'power1.out' });
  tl.to(deploy, { y: 0, autoAlpha: 1, ease: 'power4.inOut' });

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
