<template>
  <div class="value-card--wrapper">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.value-card--wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    max-width: 200px;
  }
}

h3 {
  text-align: center;
  margin-bottom: 1rem;
}

p {
  text-align: center;
}
</style>
