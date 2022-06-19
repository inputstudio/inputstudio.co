<template>
  <section class="process-mockup--wrapper">
    <div class="mockup--header">
      <h2>Maquettes</h2>
      <p>
        Une maquette est une représentation partielle ou complète d'un système ou d'un objet afin d'en tester et valider
        certains aspects et/ou le comportement, ou simplement à des fins ludiques ou informatives.
      </p>
      <img src="@/assets/img/mockup-banner.svg" alt="Bannière maquette" />
    </div>

    <div class="mockup--body">
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
          image: 'audio-conversation.svg',
          title: 'Compréhension du besoin',
          description:
            "Nous travaillons à définir et à conceptualiser votre plate-forme. L'expertise de nos maquettistes permet de répondre aux enjeux de votre métier.",
        },
        {
          image: 'mockup.svg',
          title: "Maquettage de l'app",
          description:
            "Une fois les workflows, les fonctionnalités et les chemins d'utilisation définis ensemble, nos équipes UX/UI créent avec vous une visualisation haute résolution de toutes les pages de votre outil dans un temps record.",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.process-mockup--wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 2em;
  animation: fade-in 1s forwards;
}

.mockup--header {
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

  img {
    height: 18em;
    margin-block: 1.5em;
  }
}
</style>
