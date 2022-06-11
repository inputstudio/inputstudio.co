<template>
  <div class="process-app--wrapper">
    <div class="app--header">
      <h1>Applications</h1>
      <h3>
        Une application (ou encore une appli) est un programme directement utilisé pour réaliser une tâche, ou un
        ensemble de tâches élémentaires d'un même domaine ou formant un tout.
      </h3>
    </div>

    <div class="app--body">
      <div class="apps-grid">
        <div class="web-app">
          <img src="../assets/img/webapp.svg" alt="Applications web" />
          <h2>Applications webs</h2>
          <p>
            Grâce à nos partenariats avec les chefs de file du marché, nous vous fournissons les solutions
            technologiques qui répondent le mieux à vos besoins. Nous atténuons les risques liés à vos investissements
            en TI.
          </p>
        </div>

        <div class="mobile-app">
          <img src="../assets/img/mobile-app.svg" alt="Applications mobile" />
          <h2>Applications mobile</h2>
          <p>
            Grâce à la méthode DevOps, nous livrons plus vite, avec un code de qualité supérieure. Ce processus favorise
            alors l'intégration des développements et la gestion de l'entretien de vos applications.
          </p>
        </div>
      </div>

      <div class="app--step">
        <img src="../assets/img/meeting.svg" alt="Prise de contact" />
        <div class="step--body">
          <h2>Prise de contact</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat molestiae esse quae dicta rerum in iure
            explicabo culpa! Est praesentium, tempore atque eum ipsa error nam natus. Corrupti, libero laboriosam?
          </p>
        </div>
      </div>

      <div class="app--step">
        <div class="step--body">
          <h2>Analyse du projet et dressage du système d'information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat molestiae esse quae dicta rerum in iure
            explicabo culpa! Est praesentium, tempore atque eum ipsa error nam natus. Corrupti, libero laboriosam?
          </p>
        </div>
        <img src="../assets/img/analysis.svg" alt="Analyse du projet" />
      </div>

      <div class="app--step">
        <img src="../assets/img/tools-pick.svg" alt="Choix des outils" />
        <div class="step--body">
          <h2>Choix des outils adéquats</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat molestiae esse quae dicta rerum in iure
            explicabo culpa! Est praesentium, tempore atque eum ipsa error nam natus. Corrupti, libero laboriosam?
          </p>
        </div>
      </div>

      <div class="app--step">
        <div class="step--body">
          <h2>Realisation de l'application</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat molestiae esse quae dicta rerum in iure
            explicabo culpa! Est praesentium, tempore atque eum ipsa error nam natus. Corrupti, libero laboriosam?
          </p>
        </div>
        <img src="../assets/img/programming.svg" alt="Realisation de l'application" />
      </div>

      <div class="app--step">
        <img src="../assets/img/test.svg" alt="Test de l'application" />
        <div class="step--body">
          <h2>Test de l'application</h2>
          <p>
            Grâce à une équipe dédiée et des outils automatisés, nous testons la plate-forme selon des scénarios
            prédéfinis. L'analyse et le débogage permettent une mise en œuvre optimale de votre outil.
          </p>
        </div>
      </div>

      <div class="app--step">
        <div class="step--body">
          <h2>Maintenance</h2>
          <p>
            Un suivi régulier permet d'anticiper les mises à jour de code et de corriger les éventuels bugs. Nos équipes
            effectuent des changements qui permettent à vos applications de fonctionner de manière durable et optimale.
          </p>
        </div>
        <img src="../assets/img/maintenance.svg" alt="Maintenance de l'application" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.process-app--wrapper {
  min-height: 100vh;
  padding: 6em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 2em;
}

.app--header {
  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    text-transform: uppercase;
    font-size: 2.5em;
    position: relative;
    padding-bottom: 0.5em;

    &::before {
      content: '';
      position: absolute;
      margin: auto;
      width: 10%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom: 2px solid black;
    }
  }

  h3 {
    color: grey;
    font-weight: 300;
    font-size: 1em;
    font-style: italic;
  }
}

.apps-grid {
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;

    img {
      height: 10em;
    }
  }
}
.app--body {
  margin-block: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}
.app--footer {
  position: relative;
  height: 4em;
  width: 50%;
  align-self: center;
}

.app--step {
  display: flex;
  gap: 2em;

  img {
    width: 30em;
    height: 15em;
  }

  h2 {
    font-family: 'Fjalla One', sans-serif;
    font-size: 1.8em;
  }
}

.step--body {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5em;
  padding-inline: 2em;
}
</style>
