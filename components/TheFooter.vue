<template>
  <footer class="mx-9 flex flex-col justify-center gap-10 border-t border-white py-9 md:py-12">
    <div class="flex flex-col gap-8 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <NuxtLink to="/">
          <img src="@/assets/img/logo.webp" alt="Logo" class="h-18 -translate-y-4 md:block md:h-32 md:-translate-x-9" />
        </NuxtLink>
        <div class="flex justify-center gap-6 md:justify-start md:gap-3">
          <NuxtLink
            v-for="(social, index) in socials"
            :key="`the-footer-social-${index}`"
            :to="social.url"
            target="_blank"
            :title="social.title"
            class="flex items-center gap-2"
          >
            <IconCSS :name="social.icon" class="text-4xl md:text-2xl" />
            <span class="hidden md:inline">{{ social.text }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col items-end gap-1 font-bold uppercase">
        <NuxtLink v-for="page in pages" :key="`page-url-${page.name}`" :to="page.url">
          <span class="hover-underline">{{ page.name }}</span>
          <IconCSS name="ic:baseline-arrow-outward" class="text-2xl" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center gap-3 text-center text-customGray md:text-left">
      <div class="flex items-center justify-center gap-1">
        <NuxtLink to="/privacy">{{ $t('navigation.privacy') }}</NuxtLink>
        <span>·</span>
        <p>Copyright &copy; 2022 - {{ new Date().getFullYear() }}</p>
      </div>
      <div class="flex items-center justify-center gap-1">
        <span>powered by</span>
        <IconCSS name="line-md:coffee-loop" class="text-xl" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { socials, pages } = useNav();
</script>
