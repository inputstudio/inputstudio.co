<template>
  <HeadlessMenu v-slot="{ close }" as="div" class="inline-block text-left font-light">
    <div>
      <HeadlessMenuButton>
        <img :src="burgerLogo" alt="Menu" title="Menu" />
      </HeadlessMenuButton>
    </div>

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
            <nuxt-link :to="link.url">{{ link.name }}</nuxt-link>
          </HeadlessMenuItem>
        </div>

        <div class="flex flex-col items-end gap-4">
          <button type="button" @click="openCalendly">
            <img src="@/assets/img/calendly.svg" alt="Logo Calendly" width="42" />
          </button>

          <a href="https://github.com/inputstudio/" target="_blank" rel="noopener noreferrer">
            <IconCSS name="mdi:github" size="42px" class="text-neutral-600 transition-colors" />
          </a>

          <a href="https://www.linkedin.com/company/inputstudio/" target="_blank" rel="noopener noreferrer">
            <IconCSS name="mdi:linkedin" size="42px" class="text-neutral-600 transition-colors" />
          </a>
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
// @ts-nocheck 2307
import burgerLogo from '@/assets/img/burger.svg';

const menuLinks = [
  {
    name: 'Studio',
    url: '#',
  },
  {
    name: 'Projets',
    url: '#',
  },
  {
    name: 'Nous contacter',
    url: '#',
  },
];

const calendly = useCalendly();
const openCalendly = () => {
  calendly.showPopupWidget('https://calendly.com/input_studio/30min');
};
</script>
