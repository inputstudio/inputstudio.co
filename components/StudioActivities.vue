<template>
  <section class="flex flex-col gap-10">
    <h1 class="text-6xl font-medium">Que faisons nous ?</h1>
    <p class="text-lg font-light md:w-3/4 md:text-2xl">
      Input studio est une équipe orientée produit. Nous concevons et développons des solutions web complètes avec une
      allure et une sensation professionnelle en utilisant les dernières technologies.
    </p>

    <div class="grid grid-cols-1 place-content-center gap-6 md:grid-cols-3 md:gap-9">
      <AppCard v-for="(activity, index) in activities" :key="`career-activity-${index}`" :border-top-left-radius="50">
        <template #app-card-body>
          <div class="flex flex-col justify-around gap-5">
            <span class="text-lg text-customGray">{{ `0${index + 1}` }}</span>
            <h2 class="text-3xl font-medium">{{ activity.title }}</h2>
            <img :src="activity.image" :alt="activity.title" class="w-2/3 self-center md:aspect-square md:w-2/3" />
            <p class="tracking-wide text-customGray">{{ activity.description }}</p>
          </div>
        </template>
      </AppCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
import design from '@/assets/img/career/design.svg';
import development from '@/assets/img/career/development.svg';
import deployment from '@/assets/img/career/deployment.svg';

const activities = [
  {
    title: 'Création de design',
    image: design,
    description:
      "Notre objectif ultime est de fournir des plateformes qui offrent une expérience utilisateur exceptionnelle et permettent à nos clients d'atteindre leurs objectifs commerciaux.",
  },
  {
    title: 'Développement',
    image: development,
    description:
      'Notre expertise en programmation et notre engagement envers la qualité nous permettent de réaliser les visions de nos clients avec excellence.',
  },
  {
    title: 'Déploiement',
    image: deployment,
    description:
      "Nous prenons en charge le déploiement de vos solutions technologiques, en nous assurant qu'elles sont configurées correctement et optimisées pour les performances.",
  },
];
</script>
