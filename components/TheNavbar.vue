<template>
  <nav class="absolute top-6 flex w-screen justify-between px-9">
    <NuxtLink to="/" class="flex items-center gap-1 text-gray-500 transition-colors hover:text-white">
      <IconCSS name="ic:baseline-arrow-outward" class="-rotate-90" />
      <span>Retour à l'accueil</span>
    </NuxtLink>

    <!-- TODO: Add a glow effect on hover or something else -->
    <span class="hidden rounded-full border-[1px] border-white px-3 py-1 uppercase lg:block">Agence 100% remote</span>
  </nav>
</template>
