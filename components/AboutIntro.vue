<template>
  <section class="intro--wrapper">
    <h1>Nous sommes Input Studio.</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste blanditiis alias soluta, saepe culpa exercitationem
      obcaecati corrupti autem harum nihil et dolorem quasi totam voluptatibus doloribus quisquam aspernatur dolorum
      quibusdam.
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste blanditiis alias soluta, saepe culpa exercitationem
      obcaecati corrupti autem harum nihil et dolorem quasi totam voluptatibus doloribus quisquam aspernatur dolorum
      quibusdam.
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
