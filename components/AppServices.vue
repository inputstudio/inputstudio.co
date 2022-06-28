<template>
  <section id="services" class="services--wrapper">
    <div class="services--header">
      <h2>Nos services</h2>
    </div>

    <div class="services--grid">
      <AppServicesCard
        v-for="(service, index) in services"
        :key="index"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
        :examples="service.examples"
      />
    </div>
  </section>
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
            "Une conception web élégante et réactive qui parle le langage de votre marque et atteint vos objectifs.",
          examples: ['Boutique en ligne', 'Entreprise', 'Portfolio', 'Lancement produit', 'Blog', 'Refonte'],
        },
        {
          icon: 'mobile',
          title: 'Mobile',
          description:
            "Nous concevons avec soin des applications iOS et Android avant tout portées sur l'expérience utilisateur (UX).",
          examples: ['Android', 'iOS'],
        },
        {
          icon: 'pen-ruler',
          title: 'UI/UX Design',
          description:
            "« Une image vaut milles mots ». Ebauchez ce que vous avez toujours pensé, c'est la première étape dans la réalisation de votre projet.",
          examples: ["Conception d'interface", 'Maquette', 'Prototypage'],
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.services--wrapper {
  width: 100%;
  background-color: $primary;
  color: #fff;

  @media screen and(max-width: 768px) {
    flex-direction: column;
  }

  @media screen and(min-width: 768px) {
    padding: 6rem;
  }
}

.services--header {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  @media screen and(max-width: 768px) {
    flex-direction: column;
  }

  @media screen and(min-width: 768px) {
    padding: 0 4.5em;
  }

  div {
    opacity: 0;
    transform: translateY(-100%);
  }
}

.services--grid {
  @media screen and(max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2.5em;
  }
  @media screen and(min-width: 768px) {
    padding: 2em 4.5em;
    display: flex;
    gap: 1em;
  }

  overflow: auto;
  justify-content: center;
  align-items: center;
}
</style>
