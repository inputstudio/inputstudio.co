<template>
  <div ref="wrapper" class="flex flex-col gap-y-20 py-20">
    <div class="flex flex-col px-9">
      <p ref="title" class="text-xl font-thin">{{ $t('navigation.projects') }}</p>
      <h1 ref="subtitle" class="text-5xl font-bold md:text-8xl">{{ $t('projects.title') }}</h1>
    </div>

    <div class="p-9">
      <div class="flex flex-col justify-between gap-9 md:flex-row md:gap-20 md:text-center">
        <h2 ref="slogan" class="text-4xl">{{ $t('projects.subtitle') }}</h2>
        <p ref="description" class="md:w-2/3">{{ $t('projects.description') }}</p>
      </div>
    </div>

    <div ref="projectsWrapper" class="grid place-items-center gap-9 px-9">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>

    <AppLetsStart class="px-9" />
  </div>
</template>

<script lang="ts" setup>
const { getItems } = useDirectusItems();
const { staticAssetsEndpoint } = useRuntimeConfig().public;
const { data: projects } = await useLazyAsyncData(
  'projects',
  () =>
    getItems<Project>({
      collection: 'projects',
      params: {
        fields: ['*', 'translations.*'],
      },
    }),
  {
    default: () => [],
    transform: (projects) =>
      projects.map((project) => ({
        ...project,
        cover: new URL(project.cover, staticAssetsEndpoint).toString(),
      })),
  }
);

const wrapper = ref();
const title = ref();
const subtitle = ref();
const slogan = ref();
const description = ref();
const projectsWrapper = ref();

useAnimation(animation);

function animation() {
  fadeAnimation(wrapper.value, [title.value, subtitle.value, slogan.value, description.value, projectsWrapper.value]);
}

definePageMeta({
  title: 'meta.pages.projects',
});
</script>
