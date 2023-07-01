<template>
  <button
    type="button"
    class="ball-expander absolute bottom-0 left-1/2 w-5/6 -translate-x-1/2 -translate-y-6 transform rounded-2xl text-black shadow-lg lg:w-96"
    @click="openCalendly"
  >
    <div class="flex items-center justify-center gap-6 rounded-t-2xl bg-white p-6">
      <img src="@/assets/img/calendly.svg" alt="Logo Calendly" />
      <div class="flex flex-col text-left text-sm lg:text-base">
        <span>Planifier une réunion</span>
        <span class="font-thin">Rapide, pratique, efficace.</span>
      </div>
    </div>

    <div class="rounded-b-2xl bg-neutral-100">
      <p class="py-2 text-center text-xs font-thin text-neutral-500">Copyright (c) {{ new Date().getFullYear() }}</p>
    </div>
  </button>
</template>

<script lang="ts" setup>
const { openCalendly } = useCalendlyWidget();
</script>
