<template>
  <HeadlessMenu v-slot="{ close }" as="div" class="inline-block text-left font-light">
    <HeadlessMenuButton>
      <IconCSS name="ci:menu-alt-05" class="text-3xl text-white" />
    </HeadlessMenuButton>

    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="transform scale-x-0"
      enter-to-class="transform scale-x-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-x-100"
      leave-to-class="transform scale-x-0"
    >
      <HeadlessMenuItems
        class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-screen w-screen origin-right flex-col justify-around bg-white px-4 pt-6"
      >
        <div>
          <HeadlessMenuButton>
            <span class="text-left text-gray-500">&larr; &nbsp; Retour à l'accueil</span>
          </HeadlessMenuButton>
        </div>

        <div class="flex flex-col gap-3 text-xl">
          <HeadlessMenuItem v-for="(link, index) in menuLinks" :key="`mobile-menu-item-${index}`" @click="close">
            <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
          </HeadlessMenuItem>
        </div>

        <div class="flex flex-col items-end gap-4">
          <button type="button" @click="openCalendly">
            <img src="@/assets/img/calendly.svg" alt="Logo Calendly" width="42" />
          </button>

          <NuxtLink to="https://github.com/inputstudio/" target="_blank">
            <IconCSS name="mdi:github" size="42px" class="text-neutral-600 transition-colors" />
          </NuxtLink>

          <NuxtLink to="https://www.linkedin.com/company/inputstudio/" target="_blank">
            <IconCSS name="mdi:linkedin" size="42px" class="text-neutral-600 transition-colors" />
          </NuxtLink>
        </div>

        <div class="flex flex-col gap-1 text-lg">
          <HeadlessMenuItem>
            <nuxt-link to="#">Carrières</nuxt-link>
          </HeadlessMenuItem>

          <HeadlessMenuItem>
            <nuxt-link to="#">Politique de confidentialité</nuxt-link>
          </HeadlessMenuItem>
        </div>
      </HeadlessMenuItems>
    </transition>
  </HeadlessMenu>
</template>

<script lang="ts" setup>
const { openCalendly } = useCalendlyWidget();

const menuLinks = [
  {
    name: 'Studio',
    url: '/studio',
  },
  {
    name: 'Projets',
    url: '/projects',
  },
  {
    name: 'Nous contacter',
    url: '/contact',
  },
];
</script>
