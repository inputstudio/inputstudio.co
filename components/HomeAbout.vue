<template>
  <section id="about" class="about--wrapper">
    <div class="about--title">
      <h2>Think outside the box*</h2>
    </div>

    <div class="about--content">
      <p>
        <em>Input Studio</em> est une agence web créative qui s'adapte vos besoins grâce à notre approche agile des
        projets. Nous veillons chaque jour à être à la pointe de la technologie pour délivrer des applications modernes
        à nos clients. Input Studio est là pour vous aider à réaliser les projets auxquels vous avez toujours pensé.
      </p>
    </div>

    <div class="about--footer">
      <p>*Think outside the box = Pensez autrement</p>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const aboutWrapper = document.querySelector('.about--wrapper')

    const showSection = (entry) => {
      if (entry[0].isIntersecting) {
        entry[0].target.querySelectorAll('div').forEach((element) => {
          element.classList.add('show-about')
        })
      }
    }

    const options = {
      rootMargin: '0px',
      threshold: 0.2,
    }

    const observer = new IntersectionObserver(showSection, options)

    observer.observe(aboutWrapper)
  },
}
</script>
<style lang="scss" scoped>
.about--wrapper {
  width: 100%;
  margin: auto;

  div {
    opacity: 0;
    transform: translateY(-100%);
  }
}

.about--title {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 1.5rem;
}

.about--content {
  text-align: center;

  em {
    font-style: normal;
    font-weight: bold;
  }
}

.about--footer {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  text-align: center;
}

p {
  color: #333;
  margin-bottom: 1rem;
}

.show-about {
  @include div-from-top;
}
</style>
