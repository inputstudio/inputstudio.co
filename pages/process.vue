<template>
  <div class="about--wrapper">
    <h1 class="baffle">Page en construction...</h1>
  </div>
</template>

<script>
import baffle from 'baffle'

export default {
  head() {
    return {
      title: 'Comment travaillons-nous ? - Input Studio',
    }
  },
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
.about--wrapper {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: 'Fjalla One', sans-serif;
}
</style>
