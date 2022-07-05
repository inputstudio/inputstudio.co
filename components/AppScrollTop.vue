<template>
  <button id="scroll-top" type="button">
    <fa class="icon" :icon="['fas', 'arrow-up']" />
  </button>
</template>

<script>
export default {
  mounted() {
    const btnScrollTop = document.getElementById('scroll-top')

    window.onscroll = () => {
      if (screen.width > 768) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          btnScrollTop.style.display = 'flex'
        } else {
          btnScrollTop.style.display = 'none'
        }
      }
    }

    btnScrollTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  },
}
</script>

<style lang="scss" scoped>
#scroll-top {
  z-index: 1000;
  border: unset;
  background: unset;
  display: none;
  justify-content: center;
  align-content: center;
  color: #ddd;
  position: fixed;
  bottom: 1.5em;
  right: 1em;
  cursor: pointer;
  transition: all 0.2s;
  height: 1.7em;
  width: 1.7em;
  font-size: 2em;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
