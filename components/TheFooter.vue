<template>
  <footer class="mx-9 flex flex-col justify-center gap-10 border-t-[0.5px] border-white py-9 md:py-12">
    <div class="flex flex-col gap-8 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <NuxtLink to="/">
          <img src="/img/logo.webp" alt="Logo" class="h-18 -translate-y-4 md:block md:h-20 md:-translate-x-6" />
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
            <span class="hidden text-sm md:inline">{{ social.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-col items-end gap-1 font-bold uppercase">
        <NuxtLink
          v-for="page in pages"
          :key="`page-url-${page.name}`"
          :to="page.url"
          :target="page.external ? '_blank' : '_self'"
          :external="page.external"
        >
          <span class="hover-underline">{{ page.name }}</span>
          <IconCSS name="ic:baseline-arrow-outward" class="text-2xl" />
        </NuxtLink>
      </div>
    </div>

    <p class="text-center text-customGray">Copyright &copy; 2022 - {{ new Date().getFullYear() }}</p>
  </footer>
</template>

<script lang="ts" setup>
const { socials, pages } = useNav();
</script>
