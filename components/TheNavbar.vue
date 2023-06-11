<template>
  <nav v-if="$device.isMobileOrTablet" class="flex items-center justify-between">
    <nuxt-link to="/"><AppLogo /></nuxt-link>
    <TheMobileMenu />
  </nav>

  <nav v-else class="flex justify-between">
    <nuxt-link to="#" class="hover-underline ball-expander">Studio</nuxt-link>
    <nuxt-link to="/" class="ball-expander"><AppLogo /></nuxt-link>
    <nuxt-link to="#" class="hover-underline ball-expander">Projets</nuxt-link>
  </nav>
</template>
