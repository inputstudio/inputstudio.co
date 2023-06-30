<template>
  <section class="flex flex-col gap-10">
    <h1 class="text-6xl font-medium">Nos qualités</h1>
    <p class="text-lg font-light md:w-3/4 md:text-2xl">
      Ces qualités combinées font de nous une agence web créative fiable et performante. Nous nous efforçons de fournir
      des services de haute qualité et de créer des solutions qui répondent aux besoins uniques de nos clients, en
      veillant à leur satisfaction à chaque étape du processus.
    </p>

    <div class="flex gap-x-12 overflow-x-auto pb-10 md:px-5">
      <AppCard
        v-for="(quality, index) in qualities"
        :key="`career-quality-${index}`"
        :border-top-left-radius="50"
        :style="(isMobileOrTablet && { 'min-width': '250px' }, !isMobileOrTablet && { 'min-width': '350px' })"
      >
        <template #app-card-body>
          <div class="flex flex-col justify-around gap-5">
            <div class="flex items-center justify-around">
              <img :src="quality.image" :alt="quality.title" class="aspect-square" />
              <h2 class="text-2xl font-medium">{{ quality.title }}</h2>
            </div>

            <p class="text-justify text-customGray">{{ quality.description }}</p>
          </div>
        </template>
      </AppCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
import creativity from '@/assets/img/career/creativity.svg';
import competence from '@/assets/img/career/competence.svg';
import client from '@/assets/img/career/client.svg';
import conception from '@/assets/img/career/conception.svg';

const { isMobileOrTablet } = useDevice();

const qualities = [
  {
    image: creativity,
    title: 'Créativité',
    description:
      "Nous sommes passionnés par la créativité et l'innovation. Nous aimons repousser les limites et proposer des solutions uniques et captivantes. Notre équipe de designers et de développeurs est constamment à l'affût des dernières tendances et des meilleures pratiques pour offrir des designs modernes et engageants.",
  },
  {
    image: competence,
    title: 'Compétence technique',
    description:
      "Nous disposons d'une équipe technique hautement qualifiée et expérimentée. Nos développeurs et designers sont des experts dans leur domaine et maîtrisent les dernières technologies et outils. Nous nous engageons à fournir des solutions technologiques robustes, performantes et évolutives.",
  },
  {
    image: client,
    title: 'Orientation client',
    description:
      'Nous mettons nos clients au cœur de notre démarche. Nous écoutons attentivement leurs besoins, leurs objectifs et leurs préférences, et nous adaptons nos services en conséquence. Nous croyons en une communication transparente et en une collaboration étroite avec nos clients tout au long du processus de projet.',
  },
  {
    image: conception,
    title: 'Excellence de la conception',
    description:
      "Nous attachons une grande importance à la qualité de nos designs. Nous nous efforçons de créer des interfaces utilisateur conviviales, esthétiques et intuitives. Nous prenons en compte l'expérience utilisateur (UX) dans toutes nos réalisations, en nous assurant que les utilisateurs finaux bénéficient d'une expérience agréable et fluide.",
  },
];
</script>

<style lang="scss"></style>
