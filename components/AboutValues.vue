<template>
  <div class="values--wrapper">
    <h2 class="values-title">Nos valeurs</h2>

    <div class="values-grid">
      <AboutValuesCard
        v-for="(value, index) in values"
        :key="index"
        :title="value.title"
        :description="value.description"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: [
        {
          title: 'Goût du défi',
          description:
            'Going out of comfort zone - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae doloribus rerum autem, accusamus ut sit molestias nisi libero!',
        },
        {
          title: "Priorité à l'utilisateur",
          description:
            'UX - Privacy - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae doloribus rerum autem, accusamus ut sit molestias nisi libero!',
        },
        {
          title: "À l'écoute",
          description:
            'Listen smart - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae doloribus rerum autem, accusamus ut sit molestias nisi libero!',
        },
        {
          title: 'Apprentissage permanent',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae doloribus rerum autem, accusamus ut sit molestias nisi libero!',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.values--wrapper {
  width: 100vw;
  padding: 6rem 2rem;
  background-color: $bg-secondary;
  color: white;

  @media screen and (min-width: 768px) {
    padding: 6rem 20vw;
  }
}

.values-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
}

h2 {
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
}
</style>
