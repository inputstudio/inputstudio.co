<template>
  <nav class="z-10 flex items-center justify-between">
    <NuxtLink to="/studio" class="hover-underline hidden lg:block">{{ $t('navigation.studio') }}</NuxtLink>
    <NuxtLink to="/"><AppLogo /></NuxtLink>
    <NuxtLink to="/blog" class="hover-underline hidden lg:block" :external="true">
      {{ $t('navigation.blog') }}
    </NuxtLink>

    <HomeNavbarMenu class="z-50 lg:hidden" />
  </nav>
</template>
