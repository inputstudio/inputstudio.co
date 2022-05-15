<template>
  <nav class="navbar--wrapper">
    <div class="navbar--brand">
      <TheLogo />
    </div>

    <div class="navbar--links">
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link :to="{ path: '/', hash: 'services' }">Services</nuxt-link>
      <nuxt-link :to="{ path: '/', hash: 'team' }">L'équipe</nuxt-link>
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

.navbar--links {
  a {
    display: inline-block;
    margin: 0 1rem;
    font-size: 1rem;
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
