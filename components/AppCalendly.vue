<template>
  <a href="https://calendly.com/input_studio" target="_blank" rel="noopener noreferrer">
    <div
      class="absolute bottom-0 left-1/2 w-4/5 -translate-x-1/2 translate-y-1/3 transform rounded-2xl shadow-lg md:w-96 md:-translate-y-1/3 2xl:-translate-y-1/2"
    >
      <div class="flex items-center justify-around rounded-t-2xl bg-white p-3 md:justify-center md:gap-3 md:p-6">
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
  </a>
</template>

<style lang="scss"></style>
