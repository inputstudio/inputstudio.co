<template>
  <div
    v-if="!isMobileOrTablet"
    ref="cursor"
    class="cursor pointer-events-none fixed z-50 hidden aspect-square w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white p-2"
  ></div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const { isMobileOrTablet } = useDevice();

useAnimation(animation, true);

const cursor = ref(null);

function onMouseMove(event, cursor) {
  $gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.4,
  });
}

function onMouseEnter(cursor) {
  $gsap.to(cursor, {
    padding: 36,
    duration: 0.4,
  });
}

function onMouseLeave(cursor) {
  $gsap.to(cursor, {
    padding: 8,
    duration: 0.4,
  });
}

function animation() {
  const expandableElements = 'a, .cursor-expander';
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
</script>
