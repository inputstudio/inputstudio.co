<template>
  <section id="about" class="about--wrapper">
    <div class="about--title">
      <h2>Think outside the box</h2>
    </div>

    <div class="about--content">
      <p>
        Ce qui était à la base une passion, nous en avons fait notre métier. Chaque jour, nous apprenons pour être à la
        pointe des nouvelles technologies afin de répondre au mieux à vos besoins.
      </p>
      <p>
        Nous sommes là pour vous aider à réaliser les projets que vous avez toujours pensé en mettant à votre
        disposition notre expertise et notre savoir-faire.
      </p>
      <p>
        <span>Input Studio</span> est avant tout une agence web qui s'adapte aux besoins du client et avec notre
        approche des projets unique, nous saurons mettre en oeuvre un puissant outil repondant à toutes vos attentes et
        même plus.
      </p>
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
  display: flex;

  @media screen and(max-width: 768px) {
    flex-direction: column;
  }

  div {
    opacity: 0;
    transform: translateY(-100%);
  }
}

.about--title {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and(max-width: 768px) {
    text-align: center;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  @media screen and(min-width: 768px) {
    width: 40%;
    padding-left: 4.5em;
    padding-right: 1rem;
  }
}

.about--content {
  @media screen and(max-width: 768px) {
    text-align: center;
    padding-left: unset;
  }

  @media screen and(min-width: 768px) {
    text-align: justify;
    padding-left: 1rem;
    padding-right: 4.5em;
  }

  span {
    font-weight: bold;
  }
}

p {
  color: #333;
  margin-bottom: 1rem;
}

.show-about {
  @include div-from-top;
}
</style>
