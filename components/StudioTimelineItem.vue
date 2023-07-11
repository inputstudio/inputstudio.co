<template>
  <div v-if="isMobileOrTablet" class="my-8 flex w-full origin-top items-center justify-around">
    <div class="flex w-4/5 flex-col gap-y-6 text-center">
      <h1 class="text-3xl">{{ props.title }}</h1>
      <p class="text-lg">{{ props.description }}</p>
      <AppButton v-if="props.hasButton" class="flex self-center px-4" @click="props.buttonAction">
        {{ props.buttonText }}
      </AppButton>
    </div>

    <div class="separator relative h-[140%] w-1 bg-customGray px-[1px]">
      <div class="ball absolute inset-0 aspect-square w-0 scale-[4] rounded-full border-inherit bg-white p-0"></div>
      <span class="z-1 absolute left-0 right-0 top-0 h-0 w-full bg-white"></span>
    </div>
  </div>

  <div v-else class="flex h-[60vh] w-full origin-top items-center gap-x-20">
    <h1 class="w-2/4 text-right text-4xl">{{ props.title }}</h1>

    <div class="separator relative h-full w-1 bg-customGray px-[1px]">
      <div class="ball absolute inset-0 aspect-square w-0 scale-[4] rounded-full border-inherit bg-white p-0"></div>
      <span class="z-1 absolute left-0 right-0 top-0 h-0 w-full bg-white"></span>
    </div>

    <div class="flex w-2/4 flex-col items-center justify-center gap-4 px-0 text-justify">
      <p class="w-3/4 text-sm">{{ props.description }}</p>

      <AppButton v-if="props.hasButton" @click="props.buttonAction">
        {{ props.buttonText }}
      </AppButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { isMobileOrTablet } = useDevice();

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
    background-color: inherit;
    transform: scale(4);
    border-radius: 50%;
  }
}
</style>
