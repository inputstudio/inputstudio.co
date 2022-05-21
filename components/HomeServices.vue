<template>
  <div id="services" class="services--wrapper animated--section">
    <div class="services--header">
      <div class="services--title">
        <h1>Nos services</h1>

        <nuxt-link :to="{ path: '/', hash: '#team' }">
          <ion-icon name="arrow-down" size="large"></ion-icon>
        </nuxt-link>
      </div>

      <div class="services--desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi sequi deleniti? Assumenda nam numquam
          pariatur, animi non, corrupti tempore voluptas temporibus magnam, itaque possimus asperiores perspiciatis ipsa
          fuga? Aliquam.
        </p>
      </div>
    </div>

    <div class="services--grid">
      <HomeServiceCard
        v-for="(service, index) in services"
        :key="index"
        :icon_name="service.icon_name"
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
          icon_name: 'globe',
          title: 'Web',
          description:
            "Une conception web élégante et réactive qui parle le langage de votre marque et atteint vos objectifs. Des pages d'accueil aux applications web, nous faisons tout !",
          examples: ['ecommerce', 'portfolio', 'vitrine', 'front-end', 'back-end', 'refonte'],
        },
        {
          icon_name: 'phone-portrait',
          title: 'Mobile',
          description:
            "Nous concevons avec soin des applications iOS et Android avant tout portés sur l'expérience utilisateur (UX). Nous garantissons la création d'applications faciles à utiliser, belles et attrayantes.",
          examples: ['Android', 'iOS', 'Flutter'],
        },
        {
          icon_name: 'albums',
          title: 'Maquette',
          description:
            "<< Une image vaut milles mots >>. Ebauchez ce que vous avez toujours pensé, c'est la première étape dans la réalisation de votre projet.",
          examples: ['design', "structure d'interface", 'prototype', 'sketch'],
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.services--wrapper {
  width: 85%;
  min-height: 100vh;
  padding: 6rem 0;
  margin: auto;
  margin-bottom: 6rem;
  border-bottom: 1px solid #000;
}

.services--header {
  display: flex;
  margin-bottom: 3rem;
}

.services--title {
  width: 40%;
  flex-shrink: 0;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  font-size: 1.2rem;
  color: #333;
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
</style>
