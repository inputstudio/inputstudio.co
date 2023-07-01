<template>
  <section class="section grid min-h-screen place-items-center">
    <div class="flex flex-col items-center gap-y-7 text-center md:gap-y-10">
      <h1 class="text-4xl leading-tight md:text-8xl">
        Demarrons votre
        <AppExperienceText circle-class="-translate-x-4 -translate-y-20 md:-translate-y-10 md:-translate-x-2" />
        ensemble !
      </h1>

      <a
        href="#"
        class="rounded-full bg-white px-5 py-2 text-black md:px-10 md:py-5 md:transition-colors md:hover:bg-black md:hover:text-white"
      >
        Planifier une réunion
        <IconCSS name="ic:baseline-arrow-outward" class="text-xl" />
      </a>

      <p>ou</p>

      <a href="#" class="underline">
        Soumettre un projet
        <IconCSS name="ic:baseline-arrow-outward" class="text-xl" />
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
