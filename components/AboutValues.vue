<template>
  <section class="values--wrapper">
    <h2 class="values-title">Nos valeurs</h2>

    <div class="values--grid">
      <AboutValuesCard
        v-for="(value, index) in values"
        :key="index"
        :title="value.title"
        :description="value.description"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      values: [
        {
          title: "Priorité à l'utilisateur",
          description:
            "Nous nous efforçons de rendre nos applications intuitives, et pour cela, nous n'hésitons pas à nous affranchir des règles établies.",
        },
        {
          title: 'Goût du défi',
          description:
            'Nous sommes toujours à la recherche de nouveaux défis, sortir de notre zone de confort ne nous fait pas peur.',
        },
        {
          title: "À l'écoute",
          description:
            "Nous écoutons attentivement les besoins de nos clients. C'est ainsi que nous parviendrons à développer d'excellentes applications ensemble.",
        },
        {
          title: 'Apprentissage permanent',
          description:
            'Le web évolue constamment, raison pour laquelle nous observons les tendances et les avancées technologiques afin de créer des applications modernes pour vos utilisateurs.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.values--wrapper {
  width: 100vw;
  background-color: $primary;
  color: $on-primary;
}

.values--grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

h2 {
  margin-bottom: 4rem;
}
</style>
