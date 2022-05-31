<template>
  <div class="contact--wrapper animated--section">
    <div class="contact--title">
      <h1>Prêt à tenter une expérience inédite ?</h1>
    </div>
    <div class="contact--content">
      <h2>Faites nous confiance, soyez notre premier client !</h2>
    </div>
    <nuxt-link to="/contact" class="contact-us">Contactez nous</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact--wrapper {
  width: 100%;
  padding: 6rem;
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
