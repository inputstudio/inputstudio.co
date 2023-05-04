<template>
  <nav class="flex justify-between">
    <div class="flex gap-3">
      <a href="https://github.com/inputstudio/" target="_blank" rel="noopener noreferrer">
        <IconCSS name="mdi:github" size="32px" class="text-neutral-600 transition-colors hover:text-neutral-900" />
      </a>
      <a href="https://www.linkedin.com/company/inputstudio/" target="_blank" rel="noopener noreferrer">
        <IconCSS name="mdi:linkedin" size="32px" class="text-neutral-600 transition-colors hover:text-neutral-900" />
      </a>
      <nuxt-link to="#" title="Politique de confidentialité">
        <IconCSS name="mdi:lock" size="32px" class="text-neutral-600 transition-colors hover:text-neutral-900" />
      </nuxt-link>
      <nuxt-link to="#" title="Offres d'emploi">
        <IconCSS name="uim:bag" size="32px" class="text-neutral-600 transition-colors hover:text-neutral-900" />
      </nuxt-link>
    </div>
    <nuxt-link to="#">Nous contacter</nuxt-link>
  </nav>
</template>
