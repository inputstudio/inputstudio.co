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
  background: linear-gradient(320deg, $primary, $secondary, $tertiary);
  position: relative;
  isolation: isolate;
  color: white;
  gap: 1.2em;

  @media screen and (max-width: 768px) {
    text-align: center;
    height: 80vh;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(0deg, rgb(0 0 0 / 0.9), rgb(0 0 0 / 0));
    z-index: -1;
  }
}

h1 {
  text-transform: uppercase;
}

.scroll-indicator {
  position: absolute;
  bottom: 2em;
  right: calc(50% - (2.3em / 2));
}
</style>
