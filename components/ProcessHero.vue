<template>
  <section class="process-hero--wrapper">
    <h1>Demarche de conception</h1>
    <h3>Decouvrez notre approche unique de conception des applications</h3>

    <AppScrollDown class="scroll-indicator" />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.process-hero--wrapper {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(0deg, $primary, $secondary);
  background-size: 600% 600%;
  position: relative;
  isolation: isolate;
  color: white;
  gap: 1.2em;
  animation: HeroGradient 8s ease infinite;

  @media screen and (max-width: 768px) {
    text-align: center;
    height: 80vh;
  }
}

h1 {
  text-transform: uppercase;
}

.scroll-indicator {
  position: absolute;
  bottom: 1em;
  right: calc(50% - (2.3em / 2));

  @media screen and (min-width: 768px) {
    bottom: 2em;
  }
}
</style>
