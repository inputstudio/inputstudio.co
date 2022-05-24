<template>
  <div class="contact--wrapper">
    <div class="contact--title">
      <h1>Prêt à tenter une expérience inédite ?</h1>
    </div>
    <div class="contact--content">
      <h2>Faites nous confiance, soyez notre premier client !</h2>
    </div>
    <nuxt-link to="/contact-us" class="contact-us">Contactez nous</nuxt-link>
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
}

.contact--title {
  font-size: 1.5em;
}

.contact-us {
  @include button($cursor: pointer);
  width: 15%;
}

</style>
