<template>
  <div id="cursor" class="cursor fixed z-50 aspect-square w-4 -translate-x-1/2 -translate-y-1/2 rounded-full p-4"></div>
</template>

<script setup>
import { gsap } from 'gsap';
const app = useNuxtApp();

// Move the cursor
function onMouseMove(e, cursor) {
  gsap.to(cursor, 0.4, {
    x: e.pageX - 35,
    y: e.pageY - 35,
  });
}

app.hook('app:mounted', () => {
  const cursor = document.getElementById('cursor');

  document.body.addEventListener('mousemove', (e) => onMouseMove(e, cursor));

  // document.body.addEventListener('mousemove', (e) => {
  //   const x = e.pageX;
  //   const y = e.pageY;

  //   console.log(x, y);
  //   cursor.style.top = x + 'px';
  //   cursor.style.left = y + 'px';
  //   cursor.style.display = 'block';
  // });
});
// function logging() {}

// onMounted(() => {
//   const cursor = document.getElementById('cursor');

//   cursor?.addEventListener('mousemove', (e) => {
//     let x = e.pageX;
//     let y = e.pageY;

//     cursor.style.top = x + 'px';
//     cursor.style.left = y + 'px';
//     cursor.style.display = 'block';
//   });
// });
</script>

<style lang="scss">
.cursor {
  background-color: rgba(0, 0, 0, 0.177);
  pointer-events: none;
}
</style>
