<template>
  <section ref="wrapper" class="flex flex-col gap-10">
    <h1 ref="title" class="text-6xl font-medium">{{ $t('studio.activities.title') }}</h1>
    <p ref="description" class="text-lg font-light md:w-3/4 md:text-2xl">{{ $t('studio.activities.subtitle') }}</p>

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
const { $gsap } = useNuxtApp();
const { t } = useI18n();

const activities = [
  {
    title: 'Création de design',
    image: '/img/career/design.svg',
    description: t('studio.activities.design'),
  },
  {
    title: 'Développement',
    image: '/img/career/development.svg',
    description: t('studio.activities.development'),
  },
  {
    title: 'Déploiement',
    image: '/img/career/deployment.svg',
    description: t('studio.activities.deployment'),
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
