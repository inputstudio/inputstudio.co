<template>
  <div class="scroll-indicator"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.scroll-indicator {
  width: 2.3em;
  border: 0.1em solid white;
  border-radius: 2em;
  height: 3.5em;

  &::after {
    content: '';
    position: absolute;
    height: 0.6em;
    width: 0.4em;
    top: 20%;
    left: 42%;
    border-radius: 50%;
    background-color: white;
    animation: scroll-down-animation 1.8s infinite;
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
  }
}
</style>
