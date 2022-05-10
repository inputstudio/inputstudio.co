<template>
  <nav class="navbar--wrapper">
    <div class="navbar--brand">
      <nuxt-link to="/" class="brand">Input Studio</nuxt-link>
    </div>

    <div class="navbar--links">
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link to="">Services</nuxt-link>
      <nuxt-link to="">Réalisations</nuxt-link>
      <nuxt-link to="">L'équipe</nuxt-link>
    </div>

    <div class="navbar--end">
      <nuxt-link to="/contact-us" class="contact-btn">Nous contacter</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar--wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111;
  color: white;
  padding: 1rem 20vw;
}

.brand {
  text-transform: uppercase;
  font-family: 'Fjalla One', sans-serif;
  font-weight: bold;
  font-size: 1rem;
}

.navbar--links {
  a {
    display: inline-block;
    margin-left: 1rem;
    font-size: 0.9rem;
    transition: border 0.1s ease-in-out;
    padding-bottom: 3px;

    &:hover {
      padding-bottom: 0px;
      border-bottom: 3px solid #fff;
    }
  }
}

.navbar--end {
  display: flex;
}

.contact-btn {
  @include button($border: unset);
}
</style>
