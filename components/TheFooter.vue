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
        <nuxt-link :to="{ path: '/', hash: 'services' }">Services</nuxt-link>
        <nuxt-link :to="{ path: '/', hash: 'team' }">L'équipe</nuxt-link>
        <nuxt-link to="/contact-us">Nous contacter</nuxt-link>
      </div>

      <div class="footer--socials">
        <a href=""><ion-icon name="logo-instagram"></ion-icon>Instagram</a>
        <a href=""><ion-icon name="logo-facebook"></ion-icon>Facebook</a>
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
  background: #111;
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
}

.footer--logo,
.footer--links,
.footer--socials {
  width: 20%;

  a {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
}

.footer--logo {
  * {
    margin-bottom: 1rem;
  }
}

.footer--bottom {
  margin-top: 6rem;
  text-align: center;

  p {
    font-size: .9em;
  }
}
</style>
