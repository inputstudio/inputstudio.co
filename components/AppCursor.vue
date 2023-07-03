<template>
  <div
    v-if="!isMobileOrTablet"
    ref="cursor"
    class="cursor pointer-events-none fixed z-50 hidden aspect-square w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/60 p-1"
  ></div>
</template>

<script setup>
import { gsap } from 'gsap';

const { hook } = useNuxtApp();
const { isMobileOrTablet } = useDevice();

const cursor = ref(null);

const expandableElements = 'a, .cursor-expander';

function onMouseMove(event, cursor) {
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.4,
  });
}

function onMouseEnter(cursor) {
  gsap.to(cursor, {
    scale: 8,
    duration: 0.4,
  });
}

function onMouseLeave(cursor) {
  gsap.to(cursor, {
    scale: 1,
    duration: 0.4,
  });
}

function init() {
  const hoverables = document.querySelectorAll(expandableElements);

  hoverables.forEach((element) => {
    element.addEventListener('mouseenter', () => onMouseEnter(cursor.value));
    element.addEventListener('mouseleave', () => onMouseLeave(cursor.value));
    element.addEventListener('click', () => onMouseLeave(cursor.value));
  });

  document.body.addEventListener('mousemove', (e) => onMouseMove(e, cursor.value));

  if (cursor.value) {
    cursor.value.classList.remove('hidden');
  }
}

hook('page:finish', () => {
  init();
});

hook('page:transition:finish', () => {
  init();
});
</script>
