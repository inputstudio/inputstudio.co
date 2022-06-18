<template>
  <section class="hero--wrapper">
    <h1 class="baffle">Nous ne réalisons pas des sites mais des experiences web.</h1>
    <nuxt-link :to="{ path: '/', hash: '#about' }" class="learnmore-btn">
      <span>En savoir plus</span>
      <fa class="icon" :icon="['fas', 'arrow-down']" size="lg" />
    </nuxt-link>
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
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh;
  color: #fff;
  overflow: hidden;
  background: linear-gradient(320deg, $primary, $secondary, $tertiary);
  background-size: 600% 600%;
  -webkit-animation: HeroGradient 16s ease infinite;
  -moz-animation: HeroGradient 16s ease infinite;
  animation: HeroGradient 16s ease infinite;
}

h1 {
  display: block;
  padding: 0 20vw;
  text-align: left;
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    padding: 0 10vw;
  }
}

.learnmore-btn {
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-bottom: 1rem;
  }

  .icon {
    -webkit-animation: arrow-animation 2s linear infinite;
    -moz-animation: arrow-animation 2s linear infinite;
    animation: arrow-animation 2s linear infinite;
  }
}
</style>
