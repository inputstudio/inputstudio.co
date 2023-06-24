<template>
  <main>
    <AppCursor />

    <div>
      <AppBackButton />
      <slot />
    </div>
  </main>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '%s — Input Studio',
});
</script>
