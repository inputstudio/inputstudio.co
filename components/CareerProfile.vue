<template>
  <div :class="{ 'border-b ': !lastItem }" class="space-y-4 border-t border-white py-4">
    <div class="flex cursor-pointer justify-between" @click="show = !show">
      <h2 class="text-2xl lg:text-4xl">{{ title }}</h2>
      <button type="button">
        <IconCSS v-if="show" name="ic:baseline-minus" class="text-2xl" />
        <IconCSS v-else name="ic:baseline-plus" class="text-2xl" />
      </button>
    </div>

    <div v-show="show" class="flex flex-col items-start gap-y-1">
      <p>{{ description }}</p>
      <a
        href="mailto:hello@inputstudio.co"
        class="my-3 rounded-full border-2 border-white bg-white px-3 py-1 text-black transition-colors hover:bg-black hover:text-white lg:px-5 lg:py-3"
      >
        Envoyez votre CV
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
  lastItem: {
    type: Boolean,
    required: true,
  },
});

const show = ref(props.isOpen);
</script>
