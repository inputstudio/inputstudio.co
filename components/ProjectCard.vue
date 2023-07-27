<template>
  <div ref="wrapper" class="flex flex-col gap-9 rounded-xl border-[1px] border-green-400/50 p-3 md:p-9">
    <h2 ref="title" class="font-inter text-2xl md:text-4xl">{{ project.name }}</h2>

    <div class="flex flex-col gap-9 md:flex-row">
      <img
        ref="cover"
        :src="project.cover"
        :alt="`${deliverable} ${project.name}`"
        class="aspect-square w-full shrink-0 rounded-xl object-cover md:w-1/4"
      />

      <div class="flex flex-col gap-3 text-xl">
        <p ref="description" class="mb-3 font-thin">{{ description }}</p>

        <div class="flex items-center gap-3">
          <Icon :name="project.orgTypeIcon" />
          <span>{{ orgType }}</span>
        </div>

        <div class="flex items-center gap-3">
          <Icon :name="project.deliverableIcon" />
          <span>{{ deliverable }}</span>
        </div>

        <AppButton v-if="project.link" :to="project.link" class="mt-9">
          <span class="text-base">{{ $t('projects.visit-website') }}</span>
          <IconCSS name="ic:baseline-arrow-outward" class="text-xl" />
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const { hook } = useNuxtApp();

const wrapper = ref();

const setupTimeline = () => {
  fadeAnimation(wrapper.value, [wrapper.value]);
};

/** To Do : should be trigger on page refresh or on page change !!! */
hook('page:transition:finish', setupTimeline);
hook('page:finish', setupTimeline);

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

const deliverable = props.project.translations.find(
  (translation) => translation.languages_code === locale.value
)!.deliverable;

const description = props.project.translations.find(
  (translation) => translation.languages_code === locale.value
)!.description;

const orgType = props.project.translations.find((translation) => translation.languages_code === locale.value)!.orgType;
</script>
