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

<style lang="scss" scoped>
section {
  min-height: 100vh;
  background-image: url('@/assets/img/halo-blue.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
