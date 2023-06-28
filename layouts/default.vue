<template>
  <main>
    <AppCursor />

    <div>
      <TheNavbar />
      <slot />
    </div>

    <TheFooter />
  </main>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '%s — Input Studio',
});
</script>
