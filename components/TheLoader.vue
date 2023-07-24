<template>
  <div ref="loader" class="fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-black">
    <svg id="loader-coffee" width="50" height="50" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.6667 12.4667V17C19.6667 21.4183 16.0849 25 11.6667 25H9C4.58172 25 1 21.4183 1 17V12.4667C1 12.0248 1.35817 11.6667 1.8 11.6667H18.8667C19.3085 11.6667 19.6667 12.0248 19.6667 12.4667Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 8.99999C13 7.66666 13.9524 6.33332 15.8572 6.33332C17.9611 6.33332 19.6667 4.62774 19.6667 2.5238V1.66666"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.66663 9V8.33333C7.66663 6.1242 9.45749 4.33333 11.6666 4.33333C13.1394 4.33333 14.3333 3.13943 14.3333 1.66667V1"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3334 11.6667H21.6667C23.5076 11.6667 25 13.1591 25 15C25 16.8409 23.5076 18.3333 21.6667 18.3333H19.6667"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';

const { hook } = useNuxtApp();

const loader = ref();

const hideLoader = () => {
  gsap.to(loader.value, { autoAlpha: 0, duration: 1.5 });
};

hook('page:finish', hideLoader);
</script>

<style lang="scss">
#loader-coffee {
  font-size: 30px;
  path {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: draw 10s linear alternate infinite;
  }
}
</style>
