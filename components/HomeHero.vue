<template>
  <div class="hero--wrapper">
    <video playsinline autoplay muted loop>
      <!-- TODO: Optimize video size -->
      <!-- TODO: Stop video on scroll -->
      <!-- https://www.pexels.com/video/abstract-digital-animation-7670836/ -->
      <source
        src="@/assets/pexels-rostislav-uzunov-7670836.mp4"
        type="video/mp4"
      />
      <!-- TODO: Add an image as placeholder -->
      Your browser does not support the video tag.
    </video>
    <h1>Together we prevail,</h1>
    <h2>We don't build websites, we build web experiences...</h2>
    <nuxt-link to="" class="button invert">Learn more</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero--wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh;
  color: #fff;
  overflow: hidden;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
}

h1 {
  font-family: 'Fjalla One', sans-serif;
  font-size: 5rem;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px #111;
  margin-bottom: 1rem;
  cursor: grab;

  &:hover {
    font-style: italic;
  }
}

h2 {
  font-family: 'Fjalla One', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px #111;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
