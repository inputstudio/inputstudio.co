<template>
  <nav class="navbar--wrapper">
    <div class="navbar-brand">
      <TheLogo />
    </div>

    <div class="navbar-links">
      <nuxt-link to="/" class="navbar-link">Accueil</nuxt-link>
      <nuxt-link to="/process" class="navbar-link">Démarche</nuxt-link>
      <nuxt-link to="/about" class="navbar-link">À propos</nuxt-link>
      <nuxt-link to="/contact" class="navbar-link contact-btn">Nous contacter</nuxt-link>
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
  background: $background;
  color: $on-background;
  padding: 1rem;
  flex-direction: column;
  gap: 1em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 1rem 20vw;
  }
}

.navbar-brand {
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
}

.navbar-links {
  display: flex;

  @media screen and (max-width: 768px) {
    overflow-x: auto;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
  }
}

.navbar-link {
  display: inline-block;
  padding-bottom: 5px;
  position: relative;
  transition: border 0.1s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.4s ease-out;
  }

  @media (hover: hover) {
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  @media screen and (max-width: 768px) {
    white-space: nowrap;
    padding: 0.5rem;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    margin-inline: 1rem;
  }
}

.contact-btn {
  @media screen and (min-width: 768px) {
    @include button($border: unset, $cursor: pointer);
    margin-inline: 1rem;

    &:hover {
      border-bottom: unset;
    }
  }
}
</style>
