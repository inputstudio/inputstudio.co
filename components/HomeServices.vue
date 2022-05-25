<template>
  <div id="services" class="services--wrapper animated--section">
    <div class="services--header">
      <div class="services--title">
        <h1>Nos services</h1>
      </div>

      <div class="services--desc">
        <p>
          Tous les sites Web sont différents et chaque site requiert une démarche personnalisée pour maximiser son
          potentiel. Qu'il s'agisse d'un travail d'agence de référence spécifique à un projet , Input Studio est
          particulièrement bien placé pour fournir des services stratégiques, axés sur la croissance et les résultats
          grâce à notre approche de la conception Web centrée sur l'humain, convaincante et évolutive.
        </p>
      </div>
    </div>

    <div class="services--grid">
      <HomeServicesCard
        v-for="(service, index) in services"
        :key="index"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
        :examples="service.examples"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          icon: 'globe',
          title: 'Web',
          description:
            "Une conception web élégante et réactive qui parle le langage de votre marque et atteint vos objectifs. Des pages d'accueil aux applications web, nous faisons tout !",
          examples: ['ecommerce', 'portfolio', 'vitrine', 'front-end', 'back-end', 'refonte'],
        },
        {
          icon: 'phone-portrait',
          title: 'Mobile',
          description:
            "Nous concevons avec soin des applications iOS et Android avant tout portés sur l'expérience utilisateur (UX). Nous garantissons la création d'applications faciles à utiliser, belles et attrayantes.",
          examples: ['Android', 'iOS', 'Flutter'],
        },
        {
          icon: 'albums',
          title: 'Maquette',
          description:
            "« Une image vaut milles mots ». Ebauchez ce que vous avez toujours pensé, c'est la première étape dans la réalisation de votre projet.",
          examples: ['design', "structure d'interface", 'prototype', 'sketch'],
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.services--wrapper {
  width: 100%;
  background-color: $bg-secondary;
  color: #fff;

  @media screen and(max-width: 768px) {
    padding: 6rem 1rem;
    flex-direction: column;
  }

  @media screen and(min-width: 768px) {
    padding: 6rem;
  }
}

.services--header {
  display: flex;
  margin-bottom: 3rem;

  @media screen and(max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  @media screen and(min-width: 768px) {
    padding: 0 4.5em;
  }

  div {
    opacity: 0;
    transform: translateY(-100%);
  }
}

.services--title {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and(max-width: 768px) {
    text-align: center;
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: 1.2em;
  }

  @media screen and(min-width: 768px) {
    width: 40%;
    padding-right: 1rem;
  }
}

.services--desc {
  @media screen and(max-width: 768px) {
    text-align: center;
  }

  @media screen and(min-width: 768px) {
    text-align: justify;
  }
}

p {
  font-size: 1.2rem;
  color: #ddd;
  margin-bottom: 1rem;
}

.services--grid {
  @media screen and(max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and(min-width: 768px) {
    padding: 2em 4.5em;
    display: flex;
  }

  overflow: auto;
  gap: 1em;
  justify-content: center;
  align-items: center;
}

.show-service-header {
  @include div-from-top;
}
</style>
