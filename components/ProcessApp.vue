<template>
  <section class="process-app--wrapper">
    <div class="app--header">
      <h2>Applications</h2>
      <p>
        Une application (ou encore une appli) est un programme directement utilisé pour réaliser une tâche, ou un
        ensemble de tâches élémentaires d'un même domaine ou formant un tout.
      </p>
    </div>

    <div class="app--body">
      <div class="apps-grid">
        <div class="web-app">
          <img src="@/assets/img/webapp.svg" alt="Applications web" />
          <h3>Applications webs</h3>
          <p>
            Grâce à nos partenariats avec les chefs de file du marché, nous vous fournissons les solutions
            technologiques qui répondent le mieux à vos besoins. Nous atténuons les risques liés à vos investissements
            en TI.
          </p>
        </div>

        <div class="mobile-app">
          <img src="@/assets/img/mobile-app.svg" alt="Applications mobile" />
          <h3>Applications mobile</h3>
          <p>
            Grâce à la méthode DevOps, nous livrons plus vite, avec un code de qualité supérieure. Ce processus favorise
            alors l'intégration des développements et la gestion de l'entretien de vos applications.
          </p>
        </div>
      </div>

      <ProcessStep
        v-for="(step, index) in steps"
        :key="index"
        :image="step.image"
        :title="step.title"
        :description="step.description"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          image: 'meeting.svg',
          title: 'Prise de contact',
          description:
            'Nous sommes à votre entière disposition et venons à votre rencontre pour vous permettre de pleinement expliquer ce que vous avez en tête.',
        },
        {
          image: 'analysis.svg',
          title: "Analyse du projet et dressage du système d'information",
          description:
            "Une fois le projet connu, nous analysons tous les composants dans le but d'en ressortir un système d'information fiable, robuste et capable de répondre à toutes vos attentes.",
        },
        {
          image: 'tools-pick.svg',
          title: 'Choix des outils adéquats',
          description:
            "Le choix des outils est tout aussi important que l'étape de l'analyse. Une mauvaise selection est susceptible de gacher l'experience utilisateur et reduire les performances de votre application.",
        },
        {
          image: 'programming.svg',
          title: "Realisation de l'application",
          description:
            'Place au code ! Vous pouvez dormir sur vos lauriers. Nous travaillons sans relache, jour et nuit dans le but de réaliser une application qui vous satisfera en un temps record.',
        },
        {
          image: 'test.svg',
          title: "Test de l'application",
          description:
            "Grâce à une équipe dédiée et des outils automatisés, nous testons la plate-forme selon des scénarios prédéfinis.L'analyse et le débogage permettent une mise en œuvre optimale de votre outil.",
        },
        {
          image: 'maintenance.svg',
          title: 'Maintenance',
          description:
            "Un suivi régulier permet d'anticiper les mises à jour de code et de corriger les éventuels bugs. Nos équipes effectuent des changements qui permettent à vos applications de fonctionner de manière durable et optimale.",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.process-app--wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 2em;
  animation: fade-in 1s forwards;
}

.app--header {
  display: flex;
  flex-direction: column;
  gap: 1em;

  h2 {
    text-transform: uppercase;
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

  p {
    color: rgba(128, 128, 128, 0.701);
    font-weight: 300;
  }
}

.apps-grid {
  display: grid;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    gap: 1.5em;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 40% 40%;
  }

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
</style>
