<template>
  <div ref="wrapper" class="flex flex-col gap-y-20 py-20">
    <div class="flex flex-col px-9">
      <p ref="title" class="text-xl font-thin">Projets</p>
      <h1 ref="subtitle" class="text-5xl font-bold md:text-8xl">Nos projets</h1>
    </div>

    <div class="p-9">
      <div class="flex flex-col justify-between gap-9 md:flex-row md:gap-20 md:text-center">
        <h2 ref="slogan" class="text-4xl">Notre travail, notre fierté</h2>
        <p ref="description" class="md:w-2/3">
          Nous ne nous engageons que dans des projets qui reflètent nos valeurs profondes, et nous sommes passionnés par
          une implication totale à chaque étape.
        </p>
      </div>
    </div>

    <div class="grid place-items-center gap-9 px-9">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>

    <AppLetsStart class="px-9" />
  </div>
</template>

<script lang="ts" setup>
const { projects } = useStore();
const { hook } = useNuxtApp();

const wrapper = ref();
const title = ref();
const subtitle = ref();
const slogan = ref();
const description = ref();

const setupTimeline = () => {
  fadeAnimation(wrapper.value, [title.value, subtitle.value, slogan.value, description.value]);
};

/** To Do : should be trigger on page refresh or on page change !!! */
hook('page:transition:finish', setupTimeline);
hook('page:finish', setupTimeline);

useHead({
  title: 'Projets',
});
</script>
