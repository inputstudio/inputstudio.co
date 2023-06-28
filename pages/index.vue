<template>
  <main class="relative flex h-screen flex-col gap-10 overflow-hidden p-5 md:justify-between md:gap-0 md:p-9">
    <AppCursor />
    <HomeNavbar />
    <HomeHero />
    <HomeFooter />
    <AppCalendly />
    <img
      src="@/assets/img/halo-green.png"
      alt=""
      class="absolute bottom-0 left-0 z-0 -translate-x-1/3 translate-y-1/3"
      aria-hidden
    />
    <img
      src="@/assets/img/halo-blue.png"
      alt=""
      class="absolute right-0 top-0 z-0 -translate-y-1/3 translate-x-1/3"
      aria-hidden
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
