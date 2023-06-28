<template>
  <nav class="hidden lg:flex lg:justify-between">
    <div class="flex gap-3">
      <NuxtLink to="https://instagram.com/input.studio" target="_blank" title="Instagram">
        <IconCSS name="mdi:instagram" class="ball-expander text-3xl" />
      </NuxtLink>

      <NuxtLink to="https://www.linkedin.com/company/inputstudio" target="_blank" title="LinkedIn">
        <IconCSS name="mdi:linkedin" class="ball-expander text-3xl" />
      </NuxtLink>

      <NuxtLink to="https://github.com/inputstudio" target="_blank" title="GitHub">
        <IconCSS name="mdi:github" class="ball-expander text-3xl" />
      </NuxtLink>

      <NuxtLink to="/careers" title="Carrière">
        <IconCSS name="uim:bag" class="ball-expander text-3xl" />
      </NuxtLink>
    </div>

    <NuxtLink to="/contact" class="ball-expander hover-underline">Nous contacter</NuxtLink>
  </nav>
</template>
