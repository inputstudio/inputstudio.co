<template>
  <div class="process-hero--wrapper">
      <h1>Demarche de conception</h1>
      <h3>Decouvrez notre approche unique de conception des applications</h3>

      <div class="scroll-indicator"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.process-hero--wrapper {
  font-family: 'Fjalla One', sans-serif;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(320deg, $bg-primary, $bg-secondary, $bg-tertiary);
  position: relative;
  isolation: isolate;
  color: white;
  padding: 4em;
  gap: 1.2em;

  &::before{
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
  font-size: 5em;
  text-transform: uppercase;
}

h3 {
      font-size: 1.6em;
}

.scroll-indicator {
  width: 2.3em;
  height: 4em;
  border: .1em solid white;
  border-radius: 2em;
  position: absolute;
  bottom: 2em;
  right: 2em;

  &::after {
    content: '';
    position: absolute;
    height: .6em;
    width: .4em;
    top: 20%;
    left: 42%;
    border-radius: 50%;
    background-color: white;
    animation: scroll-down-animation 1s infinite;
  }
}

@keyframes scroll-down-animation {
  from {
    opacity: 1;
    top: 20%;
  }
  to {
    opacity: 0;
    top: 50%;
    /* transform: scale(0); */
  }
}
</style>
