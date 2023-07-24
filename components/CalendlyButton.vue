<template>
  <AppButton @click="openCalendly">
    <slot></slot>
  </AppButton>
</template>

<script lang="ts" setup>
const { openCalendly } = useCalendlyWidget();
</script>
