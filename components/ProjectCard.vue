<template>
  <div class="flex flex-col gap-9 rounded-xl border-[1px] border-green-400/50 p-3 md:p-9">
    <h2 class="font-inter text-2xl md:text-4xl">{{ project.name }}</h2>

    <div class="flex flex-col gap-9 md:flex-row">
      <img :src="project.cover" :alt="`${project.deliverable} ${project.name}`" class="w-full rounded-xl md:max-w-xl" />

      <div class="flex flex-col gap-3 text-xl">
        <p class="mb-3 font-thin">{{ project.description }}</p>

        <div class="flex items-center gap-3">
          <Icon :name="project.orgTypeIcon" />
          <span>{{ project.orgType }}</span>
        </div>

        <div class="flex items-center gap-3">
          <Icon :name="project.deliverableIcon" />
          <span>{{ project.deliverable }}</span>
        </div>

        <NuxtLink
          v-if="project.link"
          :to="project.link"
          target="_blank"
          class="cursor-expander mt-6 flex items-center justify-center gap-1 rounded-full bg-white px-5 py-2 text-black md:w-fit"
        >
          <span>Visitez le site</span>
          <IconCSS name="ic:baseline-arrow-outward" class="text-xl" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>
