<template>
  <div
    :style="{ borderTopLeftRadius: props.borderTopLeftRadius + 'px' }"
    class="app-card rounded-2xl border border-white p-5"
  >
    <slot name="app-card-body"></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  borderTopLeftRadius: {
    type: Number,
    default: 16,
  },
});
</script>

<style lang="scss">
.app-card {
  background: linear-gradient(180deg, #050505 0%, #191919 100%);
}
</style>
