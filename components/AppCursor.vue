<template>
  <div id="cursor" class="cursor fixed z-50 aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full p-4"></div>
</template>

<script setup>
import { gsap } from 'gsap';

const { hook } = useNuxtApp();

// Move the cursor
function onMouseMove(e, cursor) {
  gsap.to(cursor, 0.4, {
    x: e.pageX - 35,
    y: e.pageY - 35,
  });
}

function onMouseEnter(cursor) {
  gsap.to(cursor, 0.4, {
    scale: 4,
  });
}

function onMouseLeave(cursor) {
  gsap.to(cursor, 0.4, {
    scale: 1,
  });
}

hook('app:suspense:resolve', () => {
  const cursor = document.getElementById('cursor');
  const hoverableLinks = document.querySelectorAll('.ball-expander');

  // For each links with hoverable css class
  hoverableLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => onMouseEnter(cursor));
    link.addEventListener('mouseleave', () => onMouseLeave(cursor));
  });

  document.body.addEventListener('mousemove', (e) => onMouseMove(e, cursor));
});
</script>

<style lang="scss">
$bg-color: rgba(0, 0, 0, 0.6);

.cursor {
  background-color: $bg-color;
  pointer-events: none;
}
</style>
