<template>
  <div class="flex h-[40vh] w-full items-center gap-x-20">
    <h1 class="w-1/3 text-right text-3xl">{{ props.title }}</h1>

    <div class="separator relative h-full w-1 bg-white px-[1px]"></div>

    <div class="flex w-2/3 flex-col gap-4">
      <p class="text-lg">{{ props.description }}</p>

      <AppButton v-if="props.hasButton" @click="props.buttonAction">
        {{ props.buttonText }}
      </AppButton>
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
  hasButton: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
    default: '',
  },
  buttonAction: {
    type: Function,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.separator {
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 2px;
    aspect-ratio: 1;
    padding: 2px;
    background-color: white;
    transform: translateY(50px) scale(4);
    border-radius: 50%;
  }
}
</style>
