<template>
  <div class="process--step">
    <img :src="getImage(image)" :alt="title" />
    <div class="step--body">
      <h2>{{ title }}</h2>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImage(url) {
      return require(`~/assets/img/${url}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.process--step {
  display: flex;
  gap: 2em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1em;
    margin-block: 2em;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1em 2em;

    &:nth-child(odd) {
      div {
        order: 1;
      }

      img {
        order: 2;
      }
    }
  }

  img {
    height: 15em;

    @media screen and (min-width: 768px) {
      width: 30em;
    }
  }

  h2 {
    font-size: 1.8em;
  }
}

.step--body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5em;
  padding-inline: 2em;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    text-align: left;
  }
}
</style>
