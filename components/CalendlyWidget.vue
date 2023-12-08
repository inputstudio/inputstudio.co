<template>
  <button
    type="button"
    class="cursor-expander absolute bottom-0 left-1/2 w-max -translate-x-1/2 -translate-y-5 transform rounded-2xl text-black shadow-lg lg:w-96"
    @click="openCalendly"
  >
    <div class="flex items-center justify-center gap-6 rounded-t-2xl bg-white p-3 md:p-4 2xl:p-6">
      <picture>
        <source
          srcset="@/assets/img/calendly.svg"
          alt="Logo Calendly"
          media="(min-width: 768px)"
          width="64"
          height="64"
        />
        <img src="@/assets/img/calendly.svg" alt="Logo Calendly" width="48" height="48" />
      </picture>
      <div class="flex flex-col text-left text-sm md:text-base">
        <span>{{ $t('calendly.plan-meeting') }}</span>
        <span class="font-thin">{{ $t('calendly.advantages') }}</span>
      </div>
    </div>

    <div class="rounded-b-2xl bg-neutral-100">
      <p class="py-2 text-center text-xs font-light">Copyright (c) {{ new Date().getFullYear() }}</p>
    </div>
  </button>
</template>

<script lang="ts" setup>
const { openCalendly } = useCalendlyWidget();
</script>
