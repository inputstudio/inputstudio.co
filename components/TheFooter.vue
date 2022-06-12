<template>
  <footer>
    <div class="footer--main">
      <div class="footer--logo">
        <TheLogo />
        <p>Agence de développement web basée à Abidjan, Côte d'Ivoire.</p>
        <a href="mailto:hello@inputstudio.co">hello@inputstudio.co</a>
      </div>

      <div class="footer--links">
        <nuxt-link to="/">Accueil</nuxt-link>
        <nuxt-link to="/process">Démarche</nuxt-link>
        <nuxt-link to="/about">À propos</nuxt-link>
        <nuxt-link to="/contact">Nous contacter</nuxt-link>
      </div>

      <div class="footer--socials">
        <a href="https://www.instagram.com/inputstudi0/" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-instagram" size="large"></ion-icon> Instagram
        </a>
        <a href="https://www.facebook.com/inputstd/" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-facebook" size="large"></ion-icon> Facebook
        </a>
      </div>
    </div>

    <div class="footer--bottom">
      <p>Copyright &#169; 2022 Input Studio</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background: $bg-primary;
  color: #fff;
  padding: 10vh 20vw;
}

h3 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ddd;
}

ion-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

p {
  color: #ccc;
  font-size: 1.2rem;
}

.footer--main {
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.footer--logo,
.footer--links,
.footer--socials {
  width: 100%;
  margin: 1em 0;

  a {
    display: block;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    width: 20%;

    a {
      font-size: 1.2rem;
    }
  }
}

.footer--links {
  a {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: white;
      transform-origin: bottom right;
      transition: transform 0.4s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}

.footer--logo {
  * {
    margin-bottom: 1rem;
  }

  & > a {
    font-size: 1em;
  }
}

.footer--bottom {
  margin-top: 6rem;
  text-align: center;

  p {
    font-size: 0.9em;
  }
}
</style>
