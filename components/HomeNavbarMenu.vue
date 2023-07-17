<template>
  <HeadlessMenu v-slot="{ close }" as="div" class="inline-block text-left font-light">
    <HeadlessMenuButton aria-label="Ouvrir menu">
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
        class="section absolute bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-screen origin-right flex-col justify-between bg-black px-6 pb-32 pt-6"
      >
        <div>
          <HeadlessMenuButton
            aria-label="Fermer menu"
            class="flex items-center gap-1 text-gray-500 transition-colors hover:text-white"
          >
            <IconCSS name="ic:baseline-close" class="-rotate-90" />
            <span>Fermer</span>
          </HeadlessMenuButton>
        </div>

        <div class="flex flex-col gap-3">
          <HeadlessMenuItem v-for="(link, index) in pages" :key="`mobile-menu-item-${index}`" @click="close">
            <NuxtLink :to="link.url" class="flex items-center gap-3 text-2xl font-semibold">
              {{ link.name }}
              <Icon name="ic:baseline-arrow-outward" />
            </NuxtLink>
          </HeadlessMenuItem>
          <HeadlessMenuItem @click="close">
            <CalendlyButton class="mt-3 font-semibold">Prendre rendez-vous</CalendlyButton>
          </HeadlessMenuItem>
        </div>

        <div class="flex justify-center gap-6 md:justify-start md:gap-3">
          <NuxtLink
            v-for="(social, index) in socials"
            :key="`navbar-menu-social-${index}`"
            :to="social.url"
            target="_blank"
            :title="social.title"
          >
            <IconCSS :name="social.icon" class="text-4xl md:text-2xl" />
          </NuxtLink>
        </div>
      </HeadlessMenuItems>
    </transition>
  </HeadlessMenu>
</template>

<script lang="ts" setup>
const { socials, pages } = useNave();
</script>
