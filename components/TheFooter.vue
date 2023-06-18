<template>
  <nav class="flex justify-between">
    <div class="flex gap-3">
      <NuxtLink to="https://instagram.com/input.studio" target="_blank" title="Instagram">
        <IconCSS name="mdi:instagram" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </NuxtLink>

      <NuxtLink to="https://www.linkedin.com/company/inputstudio" target="_blank" title="LinkedIn">
        <IconCSS name="mdi:linkedin" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </NuxtLink>

      <NuxtLink to="https://github.com/inputstudio" target="_blank" title="GitHub">
        <IconCSS name="mdi:github" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </NuxtLink>

      <NuxtLink to="/carriere" title="Carrière">
        <IconCSS name="uim:bag" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </NuxtLink>
    </div>

    <NuxtLink to="/contact" class="hover-underline ball-expander">Nous contacter</NuxtLink>
  </nav>
</template>
