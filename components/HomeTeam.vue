<template>
  <div id="team" class="team--wrapper animated--section">
    <h1 class="team--title">Faire connaissance avec l'équipe</h1>

    <div class="team--grid">
      <HomeTeamCard
        v-for="(teammate, index) in team"
        :key="index"
        :name="teammate.name"
        :bio="teammate.bio"
        :image="teammate.image"
        :social="teammate.social"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'Cheick Sinoussou',
          bio: 'Je suis un designer UX/UI dans la conceptualisation et la création de produits numériques, aidant les entreprises et les organismes à but non lucratif à accroître leur capacité d\'impact.',
          image: 'https://ui-avatars.com/api/?name=C+S&size=256',
          social: '',
        },
        {
          name: 'Henri Joel Kouassi',
          bio: 'Développeur Fullstack Flutter, Laravel et ReactJS. Passionné d\'informatique, d\'astrononomie et de sports.',
          image: 'https://ui-avatars.com/api/?name=H+K&size=256',
          social: '',
        },
        {
          name: "Alex N'Guessan",
          bio: 'Développeur fullstack Flutter, Node.js et Vue.js. Passionné de web design minimaliste. Amateur de café et grand fan de foot.',
          image: 'https://ui-avatars.com/api/?name=A+N&size=256',
          social: 'https://marcaureln.com',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.team--wrapper {
  width: 60vw;
  padding: 3rem 0;
  margin: auto;
  margin-bottom: 6rem;
}

.team--title {
  margin-bottom: 6rem;
}

.team--grid {
  display: flex;
  justify-content: space-between;
  gap: 1.5em;
}
</style>
