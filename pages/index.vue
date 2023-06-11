<template>
  <main class="flex h-screen w-screen flex-col gap-10 overflow-hidden p-5 md:justify-between md:gap-0 md:p-9">
    <TheNavbar />

    <div class="mb-12 flex flex-col gap-4">
      <HomeHero />
      <HomeGhostCard />
    </div>

    <AppCalendly />
    <TheFooter v-if="!$device.isMobileOrTablet" />
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: 'Input Studio — Agence de développement web',
});
</script>
