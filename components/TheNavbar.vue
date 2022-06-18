<template>
  <nav class="navbar--wrapper">
    <div class="navbar--brand">
      <TheLogo />
    </div>

    <div class="navbar--links">
      <nuxt-link to="/" class="navbar--link">Accueil</nuxt-link>
      <nuxt-link to="/process" class="navbar--link">Démarche</nuxt-link>
      <nuxt-link to="/about" class="navbar--link">À propos</nuxt-link>
      <nuxt-link to="/contact" class="contact-btn">Nous contacter</nuxt-link>
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
  background: $bg-primary;
  color: $navbar-text-color;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    padding: 1rem 20vw;
  }
}

@media screen and (max-width: 768px) {
  .navbar--brand {
    display: flex;
    justify-content: center;
  }
}
.navbar--links {
  display: flex;

  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  a {
    display: inline-block;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
      white-space: nowrap;
      padding: 0.8rem;
      margin: auto;
    }

    @media screen and (min-width: 768px) {
      margin-inline: 1rem;
    }
  }
}

.navbar--link {
  transition: border 0.1s ease-in-out;
  padding-bottom: 3px;

  &:hover {
    padding-bottom: 0px;
    border-bottom: 3px solid #fff;
  }
}

.contact-btn {
  @media screen and (min-width: 768px) {
    @include button($border: unset, $cursor: pointer);
  }
}
</style>
