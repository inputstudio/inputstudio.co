<template>
  <main class="relative flex h-screen flex-col gap-10 overflow-hidden p-5 md:justify-between md:gap-0 md:p-9">
    <HomeNavbar />
    <HomeHero />
    <HomeFooter />
  </main>
</template>

<style lang="scss" scoped>
main {
  background:
    no-repeat center url('/img/grain-overlay.webp'),
    no-repeat center url('/img/stars.webp');
  background-color: #141414;
}
</style>
