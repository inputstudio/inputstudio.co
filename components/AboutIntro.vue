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
      comme tout le monde. C'est la raison pour laquelle notre agence web de spécialistes travaille à mettre la
      technologie à votre service. Cela comprend la transformation de la technologie pour qu'elle corresponde à vos
      objectifs opérationnels.
    </p>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.intro--wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
}

h1 {
  display: block;
  margin-bottom: 4rem;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    max-width: 50vw;
  }
}

p {
  text-align: right;

  @media screen and (min-width: 768px) {
    align-self: flex-end;
    font-size: 1.5rem;
    line-height: 2rem;
    max-width: 50vw;
  }
}
</style>
