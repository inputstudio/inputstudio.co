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
const currentRoute = useRoute();

const cursor = ref(null);

const expandableElements = 'a, .cursor-expander';

function onMouseMove(event, cursor) {
  gsap.to(cursor, {
    x: currentRoute.name === 'index' ? event.clientX - 35 : event.clientX,
    y: currentRoute.name === 'index' ? event.clientY - 35 : event.clientY,
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

function init() {
  const hoverables = document.querySelectorAll(expandableElements);

  hoverables.forEach((element) => {
    element.addEventListener('mouseenter', () => onMouseEnter(cursor.value));
    element.addEventListener('mouseleave', () => onMouseLeave(cursor.value));
  });

  document.body.addEventListener('mousemove', (e) => onMouseMove(e, cursor.value));
}

function clean() {
  const hoverables = document.querySelectorAll(expandableElements);

  hoverables.forEach((element) => {
    element.removeEventListener('mouseenter', () => onMouseEnter(cursor.value));
    element.removeEventListener('mouseleave', () => onMouseLeave(cursor.value));
  });

  document.body.removeEventListener('mousemove', (e) => onMouseMove(e, cursor.value));
}

hook('page:finish', () => {
  if (!cursor.value) {
    return;
  }

  init();
  cursor.value.classList.remove('hidden');
});

hook('page:start', () => {
  if (!cursor.value) {
    return;
  }

  clean();
  cursor.value.classList.add('hidden');
});
</script>
