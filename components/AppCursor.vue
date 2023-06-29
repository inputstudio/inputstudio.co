<template>
  <div
    v-if="!isMobileOrTablet"
    ref="cursor"
    class="cursor pointer-events-none fixed z-50 hidden aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 p-4"
  ></div>
</template>

<script setup>
import { gsap } from 'gsap';

const { hook } = useNuxtApp();
const { isMobileOrTablet } = useDevice();

const cursor = ref(null);

function onMouseMove(event, cursor) {
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.4,
  });
}

function onMouseEnter(cursor) {
  gsap.to(cursor, {
    scale: 4,
    duration: 0.4,
  });
}

function onMouseLeave(cursor) {
  gsap.to(cursor, {
    scale: 1,
    duration: 0.4,
  });
}

hook('page:finish', () => {
  if (!cursor.value) {
    return;
  }

  cursor.value.classList.remove('hidden');
  const hoverables = document.querySelectorAll('.ball-expander');

  hoverables.forEach((element) => {
    element.addEventListener('mouseenter', () => onMouseEnter(cursor.value));
    element.addEventListener('mouseleave', () => onMouseLeave(cursor.value));
  });

  document.body.addEventListener('mousemove', (e) => onMouseMove(e, cursor.value));
});

hook('page:start', () => {
  if (!cursor.value) {
    return;
  }

  cursor.value.classList.add('hidden');
});
</script>
