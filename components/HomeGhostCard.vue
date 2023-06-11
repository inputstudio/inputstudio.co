<template>
  <div class="flex items-center justify-between border border-white px-4 py-2">
    <div class="flex items-center gap-2">
      <img :src="ghostLogo" alt="Logo Ghost" title="Logo Ghost" />
      <h2 class="text-2xl font-extralight">GHOST EXPERT</h2>
    </div>

    <div class="flex items-center gap-4">
      <p class="text-md">Contacter-nous pour la création de votre blog</p>
      <img :src="rightArrow" alt="Right arrow" title="Right arrow" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ghostLogo from '@/assets/img/ghost.svg';
import rightArrow from '@/assets/img/right-arrow.svg';
</script>

<style lang="scss"></style>
