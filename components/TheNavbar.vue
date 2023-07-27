<template>
  <nav class="absolute top-6 flex w-screen items-center justify-between px-9">
    <NuxtLink to="/" class="flex items-center gap-1 text-gray-500 transition-colors hover:text-white">
      <IconCSS name="ic:baseline-arrow-outward" class="-rotate-90" />
      <span>{{ $t('navigation.back-home') }}</span>
    </NuxtLink>

    <div class="hidden w-fit rounded-full border-[1px] border-white px-6 py-3 uppercase md:block">
      {{ $t('app.remote-agency') }}
    </div>
  </nav>
</template>
