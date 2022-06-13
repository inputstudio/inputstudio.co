<template>
  <button id="scroll-top" type="button">
    <p>></p>
  </button>
</template>

<script>
export default {
  mounted() {
    const btnScrollTop = document.getElementById('scroll-top')

    window.onscroll = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnScrollTop.style.display = 'flex'
      } else {
        btnScrollTop.style.display = 'none'
      }
    }

    btnScrollTop.addEventListener('click', () => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    })
  },
}
</script>

<style lang="scss" scoped>
#scroll-top {
  z-index: 1000;
  border: unset;
  display: none;
  justify-content: center;
  align-items: center;
  height: 1.7em;
  width: 1.7em;
  font-size: 1.5em;
  color: white;
  background-color: $bg-quaternary;
  position: fixed;
  bottom: 1.5em;
  right: 1em;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  p {
    transform: rotate(270deg);
    position: relative;
    animation: fade-to-top 1.5s 0s infinite;
  }
}

@keyframes fade-to-top {
  from {
    transform: translateY(0.2em) rotate(270deg);
    opacity: 1;
  }
  to {
    transform: translateY(-0.5em) rotate(270deg);
    opacity: 0;
  }
}
</style>
