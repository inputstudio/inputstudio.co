<template>
  <nav class="z-10 flex items-center justify-between">
    <NuxtLink to="/studio" class="ball-expander hover-underline hidden lg:block">Studio</NuxtLink>
    <NuxtLink to="/" class="ball-expander"><AppLogo /></NuxtLink>
    <NuxtLink to="/projects" class="ball-expander hover-underline hidden lg:block">Projets</NuxtLink>

    <HomeNavbarMenu class="z-50 lg:hidden" />
  </nav>
</template>
