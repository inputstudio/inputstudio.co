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

    <div class="dropdown--menu">
      <button class="dropdown--btn">
        <ion-icon name="menu"></ion-icon>
      </button>
      <div class="dropdown--items">
        <nuxt-link to="/">Accueil</nuxt-link>
        <nuxt-link :to="{ path: '/', hash: 'services' }">Services</nuxt-link>
        <nuxt-link :to="{ path: '/', hash: 'team' }">L'équipe</nuxt-link>
        <nuxt-link to="/contact-us">Nous contacter</nuxt-link>
      </div>
    </div>
    
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

$navbar-bg: #111; 

.navbar--links, .navbar--end, .contact-btn {
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
}

.dropdown--menu {
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
}

.navbar--wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $navbar-bg;
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
  @include button($border: unset, $cursor: pointer);
}

.dropdown--btn {
  display: flex;
  justify-content: center;
  background-color: $navbar-bg;
  color: white;
  padding: .5em;
  border: unset;
  position: relative;
  cursor: pointer;
  z-index: 1;

  &:hover {
    &::after {
      opacity: 1;
    }
  }
  
  &::after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    transition: opacity 300ms;
    background-color: lighten($navbar-bg, 5);
  }

  ion-icon {
    font-size: 2em;
  }
}

.dropdown--items {
  visibility: hidden;
  background-color: $navbar-bg;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 500;

  a {
    padding: .8em 1.5em;
    text-align: center;
    transition: background-color 300ms;

    &:hover {
      background-color: white;
      color: $navbar-bg;
    }
  }
}
</style>
