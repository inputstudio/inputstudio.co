<template>
  <div>
    <h2 class="py-9 text-center text-lg tracking-wide text-white/65">Nous avons gagné leur confiance</h2>

    <NuxtMarquee v-if="$device.isMobile">
      <div v-for="client in clients" :key="client.logo" :title="client.title">
        <img :src="client.logo" :alt="`Logo ${client.title}`" class="mx-3 h-12" />
      </div>
    </NuxtMarquee>
    <div v-else class="flex max-w-screen-2xl">
      <div v-for="client in clients" :key="client.logo" :title="client.title">
        <img
          :src="client.logo"
          :alt="`Logo ${client.title}`"
          class="mr-12 h-16 grayscale transition-all hover:filter-none"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const clients = [
  {
    title: "Côte d'Ivoire Énergies",
    logo: '/img/clients/cinergies.webp',
  },
  {
    title: 'Adrili',
    logo: '/img/clients/adrili.webp',
  },
  {
    title: 'Université des Lagunes',
    logo: '/img/clients/ul.webp',
  },
  {
    title: 'Echomédias MSSC',
    logo: '/img/clients/echomedias.webp',
  },
  {
    title: 'Mr Cocktail',
    logo: '/img/clients/mrcocktail.webp',
  },
  {
    title: 'Optinov',
    logo: '/img/clients/optinov.webp',
  },
];
</script>
