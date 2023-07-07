<template>
  <div class="flex flex-col gap-9 rounded-xl border-[1px] border-green-400/50 p-3 md:p-9">
    <h2 class="font-inter text-2xl md:text-4xl">{{ project.name }}</h2>

    <div class="flex flex-col gap-9 md:flex-row">
      <img
        :src="project.cover"
        :alt="`${project.deliverable} ${project.name}`"
        class="w-full shrink-0 rounded-xl object-cover md:w-1/3"
      />

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

        <AppButton v-if="project.link" :to="project.link" class="mt-9">
          <span class="text-base">Visitez le site</span>
          <IconCSS name="ic:baseline-arrow-outward" class="text-xl" />
        </AppButton>
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
