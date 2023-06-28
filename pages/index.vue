<template>
  <main class="relative flex flex-col gap-10 overflow-hidden p-5 md:justify-between md:gap-0 md:p-9">
    <AppCursor />
    <TheNavbar class="z-10" />
    <HomeHero class="z-10" />
    <AppCalendly class="z-10" />
    <HomeFooter class="z-10 hidden md:flex" />
    <img
      src="@/assets/img/halo-green.png"
      alt="Background green halo"
      class="absolute bottom-0 left-0 z-0 -translate-x-1/3 translate-y-1/3"
    />
    <img
      src="@/assets/img/halo-blue.png"
      alt="Background blue halo"
      class="absolute right-0 top-0 z-0 -translate-y-1/3 translate-x-1/3"
    />
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: 'Input Studio — Agence de développement web',
});

definePageMeta({
  layout: false,
});
</script>
