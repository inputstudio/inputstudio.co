<template>
  <nav class="hidden lg:flex lg:justify-between">
    <div class="flex gap-3">
      <NuxtLink to="https://instagram.com/input.studio" target="_blank" title="Instagram">
        <IconCSS name="mdi:instagram" class="text-3xl" />
      </NuxtLink>

      <NuxtLink to="https://www.linkedin.com/company/inputstudio" target="_blank" title="LinkedIn">
        <IconCSS name="mdi:linkedin" class="text-3xl" />
      </NuxtLink>

      <NuxtLink to="https://github.com/inputstudio" target="_blank" title="GitHub">
        <IconCSS name="mdi:github" class="text-3xl" />
      </NuxtLink>

      <NuxtLink
        to="https://inputstudio.notion.site/Careers-a4866eda2bc54b00b0be6d94d2a3b19e"
        target="_blank"
        :title="$t('navigation.careers')"
      >
        <IconCSS name="uim:bag" class="text-3xl" />
      </NuxtLink>
    </div>

    <NuxtLink to="/contact" class="hover-underline">{{ $t('navigation.contact') }}</NuxtLink>
  </nav>
</template>
