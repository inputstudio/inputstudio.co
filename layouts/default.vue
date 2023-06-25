<template>
  <main>
    <AppCursor />

    <div>
      <AppBackButton />
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
