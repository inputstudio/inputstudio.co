<template>
  <div class="encircle inline p-6">
    <span :class="textClass">expériences web</span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  textClass: {
    type: String,
    default: 'whitespace-nowrap font-thin',
  },
});
</script>

<style lang="scss">
.encircle {
  background: no-repeat center/95% url('@/assets/img/encircle.svg');
}
</style>
