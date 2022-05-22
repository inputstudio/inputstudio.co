<template>
  <nav class="navbar--wrapper">
    <div class="navbar--brand">
      <TheLogo />
    </div>

    <div class="navbar--links">
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link :to="{ path: '/', hash: 'services' }">Services</nuxt-link>
      <nuxt-link :to="{ path: '/', hash: 'team' }">L'équipe</nuxt-link>
      <nuxt-link to="/contact-us" class="contact-btn">Nous contacter</nuxt-link>
    </div>

    <div class="dropdown--menu">
      <button class="dropdown-btn" type="button" @click="toggleMenu">
        <ion-icon v-if="!isMenuActive" name="menu"></ion-icon>
        <ion-icon v-else name="close"></ion-icon>
      </button>
      <div v-if="isMenuActive" class="dropdown--items">
        <nuxt-link to="/">Accueil</nuxt-link>
        <nuxt-link :to="{ path: '/', hash: 'services' }">Services</nuxt-link>
        <nuxt-link :to="{ path: '/', hash: 'team' }">L'équipe</nuxt-link>
        <nuxt-link to="/contact-us">Nous contacter</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { isMenuActive: false }
  },
  mounted() {
    const closeMenu = function (event) {
      if (this.isMenuActive && !event.target.matches('.dropdown-btn > *')) {
        this.isMenuActive = false
      }
    }.bind(this)

    document.body.addEventListener('click', closeMenu)
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    },
  },
}
</script>

<style lang="scss" scoped>
$navbar-bg: #111;
$navbar-color: #fff;

.navbar--wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $navbar-bg;
  color: $navbar-color;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding: 1rem 20vw;
  }
}

.navbar--links {
  display: none;

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

  @media screen and (min-width: 768px) {
    display: block;
  }
}

.contact-btn {
  @include button($border: unset, $cursor: pointer);
}

.dropdown--menu {
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.dropdown-btn {
  display: flex;
  justify-content: center;
  background-color: $navbar-bg;
  color: $navbar-color;
  padding: 0.5em;
  border: unset;
  position: relative;
  cursor: pointer;
  z-index: 1;

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  &::after {
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
  background-color: $navbar-bg;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1rem;
  left: 0;
  width: 100%;
  z-index: 500;

  a {
    padding: 0.8em 1.5em;
    text-align: center;
    transition: background-color 300ms;

    &:hover {
      background-color: $navbar-color;
      color: $navbar-bg;
    }
  }
}
</style>
