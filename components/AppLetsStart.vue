<template>
  <section class="section grid min-h-screen place-items-center">
    <div class="flex flex-col items-center gap-y-3 text-center">
      <h1 class="mb-6 text-4xl leading-tight md:text-8xl">Demarrons votre <AppExperienceText /> ensemble !</h1>

      <AppButton @click="openCalendly"> Planifier une réunion </AppButton>

      <p>ou</p>

      <NuxtLink to="/contact">
        <span class="mr-1 underline">Soumettre un projet</span>
        <IconCSS name="ic:baseline-arrow-outward" class="text-xl" />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { openCalendly } = useCalendlyWidget();
</script>
