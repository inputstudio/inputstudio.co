<template>
  <section class="contact--wrapper">
    <div class="contact--title">
      <h1>Prêt à tenter une expérience inédite ?</h1>
    </div>
    <div class="contact--content">
      <h2>Faites nous confiance, faites partie de nos premiers clients !</h2>
    </div>
    <nuxt-link to="/contact" class="contact-us">Contactez nous</nuxt-link>
  </section>
</template>

<script>
export default {
  mounted() {
    const contactWrapper = document.querySelector('.contact--wrapper')

    const showSection = (entry) => {
      if (entry[0].isIntersecting) {
        // get the div elements in contact wrapper
        const contactSectionDivs = entry[0].target.querySelectorAll('div')

        // get the contact us button in the same section
        const contactUsBtn = entry[0].target.querySelector('.contact-us')

        // Add show-contact class in all div to launch the animation
        contactSectionDivs.forEach((div) => {
          div.classList.add('show-contact')
        })

        // After 200ms, add show-contact class to contact-us button
        setTimeout(() => {
          contactUsBtn.classList.add('show-contact')
        }, 200)
      }
    }

    const options = {
      rootMargin: '0px',
      threshold: 0.2,
    }

    const observer = new IntersectionObserver(showSection, options)

    observer.observe(contactWrapper)
  },
}
</script>

<style lang="scss" scoped>
.contact--wrapper {
  width: 100%;
  padding: 6rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2.5em;

  div,
  .contact-us {
    opacity: 0;
    transform: translateY(-100%);
  }

  @media screen and (min-width: 768px) {
    padding: 6rem;
  }
}

.contact--title {
  font-size: 1.5em;
}

.contact-us {
  @include button($cursor: pointer);

  @media screen and(max-width: 768px) {
    width: 90%;
  }

  @media screen and(min-width: 768px) {
    width: 15%;
  }
}

.show-contact {
  @include div-from-top($to: 3, $delay: 500ms);
}
</style>
