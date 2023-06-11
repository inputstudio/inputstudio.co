<template>
  <nav class="flex justify-between">
    <div class="flex gap-3">
      <a href="https://github.com/inputstudio/" target="_blank" rel="noopener noreferrer">
        <IconCSS name="mdi:github" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </a>

      <a href="https://www.linkedin.com/company/inputstudio/" target="_blank" rel="noopener noreferrer">
        <IconCSS name="mdi:linkedin" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </a>

      <nuxt-link to="#" title="Politique de confidentialité">
        <IconCSS name="mdi:lock" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </nuxt-link>

      <nuxt-link to="/carriere" title="Carrière">
        <IconCSS name="uim:bag" size="32px" class="text-neutral-600 transition-colors hover:text-white" />
      </nuxt-link>
    </div>

    <nuxt-link to="contact" class="hover-underline ball-expander">Nous contacter</nuxt-link>
  </nav>
</template>
