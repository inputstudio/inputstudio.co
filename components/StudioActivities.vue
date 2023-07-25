<template>
  <section ref="wrapper" class="flex flex-col gap-10">
    <h1 ref="title" class="text-6xl font-medium">Que faisons nous ?</h1>
    <p ref="description" class="text-lg font-light md:w-3/4 md:text-2xl">
      Input studio est une équipe orientée produit. Nous concevons et développons des solutions web complètes avec une
      allure et une sensation professionnelle en utilisant les dernières technologies.
    </p>

    <div class="grid grid-cols-1 place-content-center gap-6 md:grid-cols-3 md:gap-9">
      <AppCard
        v-for="(activity, index) in activities"
        :key="`career-activity-${index}`"
        class="career-activity"
        :border-top-left-radius="50"
      >
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

const { $gsap } = useNuxtApp();

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

const wrapper = ref();
const title = ref();
const description = ref();

useAnimation(animation);

function animation() {
  const activitiesCards = $gsap.utils.toArray('.career-activity');

  const timeline = fadeAnimation(wrapper.value, [title.value, description.value]);

  timeline.from(activitiesCards, { autoAlpha: 0 });
}
</script>
