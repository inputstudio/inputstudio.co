<template>
  <div id="encircled-text" class="relative inline">
    <span class="w-fit" :class="props.textClass">expériences web</span>
    <svg
      :class="props.circleClass"
      class="absolute inset-0 mx-auto w-fit scale-x-110"
      width="1032"
      height="196"
      viewBox="0 0 1032 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M332.276 2C197.621 10.4445 -56.0272 41.7328 13.9949 121.238C127.352 207.331 716.101 213.881 908.995 157.449C1101.89 101.016 1072.76 43.0312 759.369 21.9098C445.981 0.788115 3.34811 24.4105 53.6281 90.5266"
        stroke="#46C6F1"
        stroke-width="3.81111"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  textClass: {
    type: String,
    default: 'font-thin',
  },
  circleClass: {
    type: String,
    default: '-translate-y-8',
  },
});
</script>

<style lang="scss"></style>
