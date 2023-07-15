<template>
  <section class="section flex flex-col gap-10 px-9 py-20">
    <div class="flex flex-col">
      <p class="text-xl font-thin">Projets</p>
      <h1 class="text-5xl font-bold md:text-8xl">Nos projets</h1>
    </div>

    <div class="my-10">
      <div class="flex flex-col justify-between gap-9 md:flex-row md:gap-20 md:text-center">
        <h2 class="text-4xl">Notre travail, notre fierté</h2>
        <p class="md:w-2/3">
          Nous ne nous engageons que dans des projets qui reflètent nos valeurs profondes, et nous sommes passionnés par
          une implication totale à chaque étape.
        </p>
      </div>
    </div>

    <div class="grid place-items-center gap-9">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>

    <AppLetsStart />
  </section>
</template>

<script lang="ts" setup>
const { projects } = useStore();

useHead({
  title: 'Projets',
});
</script>
