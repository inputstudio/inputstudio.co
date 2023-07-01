<template>
  <section class="section grid min-h-screen place-items-center">
    <div class="flex flex-col items-center gap-y-3 text-center">
      <h1 class="mb-6 text-4xl leading-tight md:text-8xl">
        Demarrons votre
        <AppExperienceText circle-class="-translate-x-4 -translate-y-20 md:-translate-y-10 md:-translate-x-2" />
        ensemble !
      </h1>

      <button
        class="cursor-expander rounded-full bg-white px-5 py-2 text-black md:px-10 md:py-5 md:transition-colors md:hover:bg-black md:hover:text-white"
        @click="openCalendly"
      >
        Planifier une réunion
      </button>

      <p>ou</p>

      <NuxtLink to="/contact" class="underline">
        Soumettre un projet
        <IconCSS name="ic:baseline-arrow-outward" class="text-xl" />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { openCalendly } = useCalendlyWidget();
</script>
