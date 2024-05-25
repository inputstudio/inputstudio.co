<template>
  <div>
    <h2 class="py-9 text-center text-lg tracking-wide text-white/50">Nous avons gagné leur confiance</h2>

    <NuxtMarquee v-if="$device.isMobile">
      <div v-for="client in clients" :key="client.logo" :title="client.title">
        <img :src="client.logo" :alt="`Logo ${client.title}`" class="mx-3 h-12" />
      </div>
    </NuxtMarquee>
    <div v-else class="flex max-w-screen-lg">
      <div v-for="client in clients" :key="client.logo" :title="client.title">
        <img :src="client.logo" :alt="`Logo ${client.title}`" class="mx-9 h-16" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const clients = [
  {
    title: "Côte d'Ivoire Énergies",
    logo: '/img/clients/cinergies.png',
  },
  {
    title: 'Adrili',
    logo: '/img/clients/adrili.png',
  },
  {
    title: 'Université des Lagunes',
    logo: '/img/clients/ul.png',
  },
  {
    title: 'Echomédias MSSC',
    logo: '/img/clients/echomedias.png',
  },
  {
    title: 'Mr Cocktail',
    logo: '/img/clients/mrcocktail.png',
  },
  {
    title: 'Optinov',
    logo: '/img/clients/optinov.png',
  },
];
</script>
