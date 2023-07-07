<template>
  <HeadlessDisclosure
    v-slot="{ open }"
    as="div"
    :default-open="isOpen"
    class="space-y-4 border-t border-white py-4"
    :class="{ 'border-b ': !lastItem }"
  >
    <HeadlessDisclosureButton class="cursor-expander flex w-full justify-between">
      <h2 class="text-2xl lg:text-4xl">{{ title }}</h2>
      <button type="button">
        <IconCSS v-if="open" name="ic:baseline-minus" class="text-2xl" />
        <IconCSS v-else name="ic:baseline-plus" class="text-2xl" />
      </button>
    </HeadlessDisclosureButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <HeadlessDisclosurePanel class="flex flex-col items-start gap-3">
        <p>{{ description }}</p>
        <AppButton to="mailto:hello@inputstudio.co"> Envoyez votre CV </AppButton>
      </HeadlessDisclosurePanel>
    </transition>
  </HeadlessDisclosure>
</template>

<script lang="ts" setup>
defineProps({
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
    default: false,
  },
  lastItem: {
    type: Boolean,
    required: true,
  },
});
</script>
