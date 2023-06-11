<template>
  <nav class="flex justify-between">
    <div class="flex gap-3">
      <a href="https://instagram.com/input.studio" target="_blank" rel="noopener noreferrer" title="Instagram">
        <IconCSS name="mdi:instagram" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </a>

      <a href="https://www.linkedin.com/company/inputstudio" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <IconCSS name="mdi:linkedin" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </a>

      <a href="https://github.com/inputstudio" target="_blank" rel="noopener noreferrer" title="GitHub">
        <IconCSS name="mdi:github" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </a>

      <nuxt-link to="/carriere" title="Carrière">
        <IconCSS name="uim:bag" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </nuxt-link>
    </div>

    <nuxt-link to="contact" class="hover-underline ball-expander">Nous contacter</nuxt-link>
  </nav>
</template>
