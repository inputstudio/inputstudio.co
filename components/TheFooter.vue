<template>
  <footer>
    <div class="footer--main">
      <div class="footer--logo">
        <TheLogo />
        <p>Agence de développement web basée à Abidjan, Côte d'Ivoire.</p>
        <a href="mailto:hello@inputstudio.co">hello@inputstudio.co</a>
      </div>

      <div class="footer--links">
        <nuxt-link to="/">Accueil</nuxt-link><br />
        <nuxt-link to="/process">Démarche</nuxt-link><br />
        <nuxt-link to="/about">À propos</nuxt-link><br />
        <nuxt-link to="/contact">Nous contacter</nuxt-link><br />
      </div>

      <div class="footer--socials">
        <a href="https://www.instagram.com/inputstudi0/" target="_blank" rel="noopener noreferrer">
          <fa class="icon" :icon="['fab', 'instagram']" size="lg" /> Instagram
        </a>
        <a href="https://www.facebook.com/inputstd/" target="_blank" rel="noopener noreferrer">
          <fa class="icon" :icon="['fab', 'facebook-f']" size="lg" /> Facebook
        </a>
        <a href="https://www.linkedin.com/company/inputstudio" target="_blank" rel="noopener noreferrer">
          <fa class="icon" :icon="['fab', 'linkedin']" size="lg" /> LinkedIn
        </a>
        <a href="https://github.com/inputstudio" target="_blank" rel="noopener noreferrer">
          <fa class="icon" :icon="['fab', 'github']" size="lg" /> GitHub
        </a>
      </div>
    </div>

    <div class="footer--bottom">
      <p class="cookies-notice">
        Ce site web ne vous piste pas. Nous n'utilisons pas de cookies. Nous recueillons des données d'usage à l'aide
        d'une version
        <a href="https://m.do.co/c/758f392749a4" title="DigitalOcean (lien de parrainage)" target="_blank">
          auto-hébergée
        </a>
        de Plausible,
        <a href="https://plausible.io/vs-google-analytics" title="Plausible vs Google Analytics" target="_blank">
          une alternative à Google Analytics
        </a>
        à la fois open source et respectueuse de la vie privée.
      </p>
      <p class="copyright">Copyright &#169; 2022 Input Studio</p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background: $background;
  color: $on-background;
  padding: 10vh 20vw;
}

h3 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ddd;
}

.icon {
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
    display: inline-block;
    gap: 2em;
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

.cookies-notice {
  margin-bottom: 3rem;

  a {
    font-weight: bold;
  }
}
</style>
