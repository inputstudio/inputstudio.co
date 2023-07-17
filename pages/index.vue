<template>
  <main class="relative flex h-screen flex-col gap-10 overflow-hidden p-5 md:justify-between md:gap-0 md:p-9">
    <HomeNavbar />
    <HomeHero />
    <HomeFooter />
    <CalendlyWidget />
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: 'Input Studio — Agence de développement web',
});
</script>

<style lang="scss" scoped>
main {
  background: no-repeat center url('@/assets/img/halo-green.webp'), no-repeat center url('@/assets/img/halo-blue.webp');
  background-position: top -5% right 25%, bottom 0 left 15%;
  background-color: black;

  @media screen and (min-width: 768px) {
    background: no-repeat center url('@/assets/img/halo-green.webp'),
      no-repeat center/75% url('@/assets/img/halo-blue.webp');
    background-position: top 0% left -45%, bottom 0% right -45%;
  }
}
</style>
