<template>
  <div class="hero--wrapper">
    <h1 class="baffle">Nous ne réalisons pas des sites mais des experiences web.</h1>
    <nuxt-link :to="{ path: '/', hash: '#about' }" class="learnmore-btn">
      <span>En savoir plus</span>
      <ion-icon name="arrow-down" size="large"></ion-icon>
    </nuxt-link>
  </div>
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
  /* // https://colorhunt.co/palette/293462f24c4cec9b3bf7d716
  background: linear-gradient(320deg, #293462, #f24c4c, #f7d716); */

  // https://colorhunt.co/palette/2121216d9886d9cab3f6f6f6
  background: linear-gradient(320deg, #212121, #6D9886, #D9CAB3);

  background-size: 600% 600%;
  -webkit-animation: HeroGradient 16s ease infinite;
  -moz-animation: HeroGradient 16s ease infinite;
  animation: HeroGradient 16s ease infinite;

  ion-icon {
    position: absolute;
    z-index: 10000;
    margin-top: 20px;
    animation: arrow-animation 2s linear infinite;
  }
}

h1 {
  display: block;
  padding: 0 20vw;
  text-align: left;
  font-family: 'Fjalla One', sans-serif;
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
}

.learnmore-btn {
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-bottom: 0.5rem;
  }
}
</style>
