<template>
  <section class="relative h-screen">
    <p ref="title" class="text-xl font-thin">{{ $t('studio.title') }}</p>
    <h1 ref="description" class="text-3xl font-bold leading-9 md:text-8xl">
      {{ $t('studio.subtitle') }} <AppExperienceText />.
    </h1>

    <AppScrollIndicator
      ref="scrollIndicator"
      class="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-9 animate-pulse"
    />
  </section>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';

const { hook } = useNuxtApp();

const title = ref();
const description = ref();

const initAnimation = () => {
  gsap
    .timeline({ delay: 0.5 })
    .fromTo(title.value, { autoAlpha: 0 }, { autoAlpha: 1 })
    .fromTo(description.value, { autoAlpha: 0 }, { autoAlpha: 1 });
};

/** To Do : should be trigger on page refresh or on page change !!! */
hook('page:transition:finish', initAnimation);
hook('page:finish', initAnimation);
</script>
