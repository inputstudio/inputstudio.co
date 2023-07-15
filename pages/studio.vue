<template>
  <div class="flex flex-col gap-y-20 py-20">
    <StudioHero class="p-9" />
    <StudioSlider />
    <StudioActivities class="p-9" />
    <StudioTimeline class="p-9" />
    <StudioQualities class="p-9" />
    <AppLetsStart />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Studio',
});
</script>
