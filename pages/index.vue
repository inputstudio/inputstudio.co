<template>
  <main
    class="flex h-screen w-screen flex-col gap-10 overflow-hidden bg-background p-5 md:justify-between md:gap-0 md:p-9"
  >
    <TheNavbar />
    <HomeHero />
    <AppCalendly />
    <TheFooter v-if="!$device.isMobileOrTablet" />
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: 'Input Studio — Agence de développement web',
});
</script>
