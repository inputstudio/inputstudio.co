<template>
  <button type="button" @click="openCalendly">
    <div
      class="transform rounded-2xl text-black shadow-lg md:absolute md:bottom-0 md:left-1/2 md:w-96 md:-translate-x-1/2 md:-translate-y-1/2"
    >
      <div class="flex items-center justify-center gap-3 rounded-t-2xl bg-white p-6">
        <img src="@/assets/img/calendly.svg" alt="Logo Calendly" />
        <div class="flex flex-col">
          <span class="">Planifier une réunion</span>
          <span class="font-thin">Rapide, pratique, efficace.</span>
        </div>
      </div>

      <div class="rounded-b-2xl bg-neutral-100">
        <p class="py-2 text-center text-xs font-thin text-neutral-500">Copyright (c) {{ new Date().getFullYear() }}</p>
      </div>
    </div>
  </button>
</template>

<script lang="ts" setup>
const calendly = useCalendly();
const openCalendly = () => {
  calendly.showPopupWidget('https://calendly.com/input_studio/30min');
};
</script>
