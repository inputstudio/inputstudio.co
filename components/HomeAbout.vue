<template>
  <div id="about" class="about--wrapper animated--section">
    <div class="about--title">
      <h1>Think outside the box</h1>
    </div>

    <div class="about--content">
      <p>
        Ce qui etait à la base une passion, nous en avons fait notre métier. Chaque jour, nous apprenons pour être à la pointe des nouvelles technologies afin de répondre au mieux à vos besoins.
      </p>
      <p>
        Nous sommes là pour vous aider à réaliser les projets que vous avez toujours pensé en mettant à votre disposition notre expertise et notre savoir-faire.
      </p>
      <p>
        <span>Input Studio</span> est avant tout une agence web qui s'adapte aux besoins du client et avec notre approche des projets unique, nous saurons mettre en oeuvre un puissant outil repondant à toutes vos attentes et même plus.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about--wrapper {
  width: 100%;
  padding: 6rem;
  margin: auto;
  display: flex;

  @media screen and(max-width: 768px) {
    padding: 6rem 1rem;
    flex-direction: column;
  }

  div {
    opacity: 0;
    transform: translateY(-100%);
  }
}

.about--title {
  width: 40%;
  flex-shrink: 0;
  padding-left: 4.5em;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and(max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
}

.about--content {
  padding-left: 1rem;
  padding-right: 4.5em;
  text-align: justify;

  @media screen and(max-width: 768px) {
    padding-left: unset;
  }

  span {
    font-weight: bold;
    text-transform: uppercase;
  }
}

p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
}

.show-about {
  @include div-from-top
}
</style>
