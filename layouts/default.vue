<template>
  <main>
    <TheLoader />
    <AppCursor />
    <transition name="fade" mode="out-in">
      <TheNavbar v-if="$route.path !== '/'" />
    </transition>
    <slot />

    <transition name="fade" mode="out-in">
      <TheFooter v-if="$route.path !== '/'" />
    </transition>
    <NuxtSnackbar />
  </main>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '%s — Input Studio',
});
</script>
