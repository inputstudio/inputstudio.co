<template>
  <section class="section px-9 py-20">
    <p class="text-xl font-thin">{{ $t('navigation.careers') }}</p>
    <h1 class="text-3xl font-bold md:text-8xl">{{ $t('careers.title') }}</h1>

    <div class="my-8 flex flex-col gap-20 text-justify md:my-20 md:flex-row">
      <p class="md:w-2/5">{{ $t('careers.description') }}</p>

      <AppLoader v-if="pending" />
      <div v-else class="md:w-3/5">
        <CareerProfile
          v-for="(job, index) in jobs"
          :key="`career-profile-${job.id}`"
          :position="index"
          :is-open="index === 0"
          :last-item="index + 1 === jobs.length"
          :title="job.translations.find((translation) => translation.languages_code === locale)!.title"
          :description="job.translations.find((translation) => translation.languages_code === locale)!.description"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { locale } = useI18n();
const { getItems } = useDirectusItems();
const { data: jobs, pending } = await useLazyAsyncData(
  'jobs',
  () =>
    getItems<Job>({
      collection: 'careers',
      params: {
        fields: ['*', 'translations.*'],
      },
    }),
  {
    default: () => [],
  }
);

definePageMeta({
  title: 'meta.pages.careers',
});
</script>
