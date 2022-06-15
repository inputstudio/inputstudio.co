<template>
  <section class="intro--wrapper">
    <h1>Nous sommes Input Studio.</h1>

    <p>
      Nous sommes une agence web de spécialistes basée à Abidjan. À Input Studio, construire un site web est bien plus
      que simplement installer un logiciel de conception et faire de l'intégration. En effet, notre équipe vous
      accompagne dans une démarche de planification, de choix technologique, de développement et de maintenance web.
      <br />
      <br />
      Avec le nombre assez considérable de compagnies présentement en ligne, vous ne pouvez pas vous limiter à faire
      comme tout le monde. C’est la raison pour laquelle notre Agence web de spécialistes travaillons à mettre la
      technologie à votre service. Ainsi, Cela comprend la transformation de la technologie pour qu'elle corresponde à
      vos objectifs opérationnels.
    </p>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.intro--wrapper {
  width: 100vw;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 6rem 20vw;
  }
}

h1 {
  display: block;
  margin-bottom: 4rem;
  font-size: 3rem;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 6rem;
    max-width: 50vw;
  }
}

p {
  text-align: right;
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    align-self: flex-end;
    font-size: 2rem;
    max-width: 50vw;
  }
}
</style>
