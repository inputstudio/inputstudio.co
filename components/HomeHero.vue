<template>
  <div class="hero--wrapper">
    <video playsinline autoplay muted loop>
      <!-- TODO: Optimize video size -->
      <!-- TODO: Stop video on scroll -->
      <!-- https://www.pexels.com/video/abstract-digital-animation-7670836/ -->
      <source src="@/assets/pexels-rostislav-uzunov-7670836.mp4" type="video/mp4" />
      <!-- TODO: Add a fallback image -->
      Votre navigateur ne supporte pas la balise video.
    </video>
    <h1 class="baffle">Nous ne realisons pas des sites web, mais des experiences web.</h1>
    <nuxt-link :to="{ path: '/', hash: '#about' }">
      <ion-icon name="arrow-down" size="large"></ion-icon>
    </nuxt-link>
  </div>
</template>

<script>
import baffle from 'baffle'

export default {
  mounted() {
    const gibberish = [
      '\u2588',
      '\u2593',
      '\u2592',
      '\u2591',
      '\u2588',
      '\u2593',
      '\u2592',
      '\u2591',
      '\u2588',
      '\u2593',
      '\u2592',
      '\u2591',
      '\u003C',
      '\u003E',
      '\u002F',
    ]

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
  height: 80vh;
  color: #fff;
  overflow: hidden;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
}

h1 {
  display: block;
  padding: 0 20vw;
  text-align: left;
  font-family: 'Fjalla One', sans-serif;
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  cursor: pointer;
}
</style>
