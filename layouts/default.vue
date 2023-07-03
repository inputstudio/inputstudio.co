<template>
  <main>
    <AppCursor />
    <TheNavbar v-if="$route.path !== '/'" />
    <slot />
    <TheFooter v-if="$route.path !== '/'" />
  </main>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '%s — Input Studio',
});
</script>
