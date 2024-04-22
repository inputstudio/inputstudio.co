<template>
  <component
    :is="as"
    :to="to"
    class="cursor-expander flex w-fit items-center justify-center gap-1 rounded-full bg-white px-6 py-3 text-black md:px-9 md:py-6 md:transition-colors md:hover:bg-black md:hover:text-white"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: null,
  },
});

const as = computed(() => (props.to ? resolveComponent('NuxtLink') : 'button'));
</script>
