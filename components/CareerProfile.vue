<template>
  <div class="space-y-4 border-b border-t border-white py-4">
    <div class="flex cursor-pointer justify-between" @click="show = !show">
      <h2 class="text-4xl">{{ props.title }}</h2>
      <button type="button">
        <IconCSS v-if="show" name="ic:baseline-minus" class="text-2xl" />
        <IconCSS v-else name="ic:baseline-plus" class="text-2xl" />
      </button>
    </div>
    <p v-show="show">
      {{ props.description }}
    </p>
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
});

const show = ref(props.isOpen);
</script>
