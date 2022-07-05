<template>
  <section class="hero--wrapper">
    <h1 class="baffle">Nous ne réalisons pas des sites mais des experiences web.</h1>

    <AppScrollDown class="scroll-indicator" />
  </section>
</template>

<script>
import baffle from 'baffle'

export default {
  mounted() {
    const gibberish = ['\u2588', '\u2593', '\u2592', '\u2591', '\u2588', '\u2593', '\u2592', '\u2591', '\u2588']
    const text = document.querySelector('.baffle')
    const b = baffle(text, { characters: gibberish })
    b.reveal(1000, 1000)

    text.addEventListener('click', function (e) {
      e.preventDefault()
      b.reveal(1000)
    })
  },
}
</script>

<style lang="scss" scoped>
.hero--wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 90vh;
  color: #fff;
  overflow: hidden;
  background: linear-gradient(320deg, $primary, $secondary, $tertiary);
  background-size: 600% 600%;
  -webkit-animation: HeroGradient 16s ease infinite;
  -moz-animation: HeroGradient 16s ease infinite;
  animation: HeroGradient 16s ease infinite;

  @media screen and (max-width: 768px) {
    height: 80vh;
  }
}

h1 {
  display: block;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 2rem;
  cursor: pointer;
}

.scroll-indicator {
  position: absolute;
  bottom: 2em;
  right: calc(50% - (2.3em / 2));
}
</style>
