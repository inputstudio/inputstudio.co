<template>
  <nav v-if="$device.isMobileOrTablet" class="flex items-center justify-between">
    <nuxt-link to="/"><AppLogo /></nuxt-link>
    <TheMobileMenu />
    <!-- <button type="button" @click="console.log('menu')">
      <img :src="burgerLogo" alt="Menu" title="Menu" />
    </button> -->
    <!-- <nuxt-link to="#" class="hover-underline">Projets</nuxt-link> -->
  </nav>

  <nav v-else class="flex justify-between">
    <nuxt-link to="#" class="hover-underline">Studio</nuxt-link>
    <nuxt-link to="/"><AppLogo /></nuxt-link>
    <nuxt-link to="#" class="hover-underline">Projets</nuxt-link>
  </nav>
</template>
