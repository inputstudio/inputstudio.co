<template>
  <footer class="mx-10 flex flex-col justify-center gap-10 border-t border-white py-9 md:mx-24 md:py-12">
    <div class="flex flex-col gap-8 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <img src="@/assets/img/logo.webp" alt="Logo" class="hidden h-32 -translate-x-9 -translate-y-4 md:block" />
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

      <div class="flex flex-col items-end font-bold uppercase">
        <NuxtLink v-for="page in pages" :key="`page-url-${page.name}`" :to="page.url" class="hover-underline w-fit">
          {{ page.name }}
          <IconCSS name="ic:baseline-arrow-outward" class="text-2xl" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex items-center justify-center gap-1 text-center text-customGray md:text-left">
      <span>Powered by</span>
      <IconCSS name="line-md:coffee-loop" class="text-xl" />
      <span> Copyright &copy; 2023</span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { socials, pages } = useLinks();
</script>
