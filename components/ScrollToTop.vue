<template>
  <button id="scroll-top" type="button"></button>
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
  display: none;
  justify-content: center;
  align-content: center;
  color: white;
  background-color: $secondary;
  position: fixed;
  bottom: 1.5em;
  right: 1em;
  cursor: pointer;
  transition: all 0.2s;
  height: 1.7em;
  width: 1.7em;
  font-size: 1.5em;
  opacity: 0.8;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: '>';
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(270deg);
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
