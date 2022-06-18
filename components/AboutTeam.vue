<template>
  <section id="team" class="team--wrapper animated--section">
    <h2 class="team--title">Rencontrez l'équipe</h2>

    <div class="team--grid">
      <AboutTeamCard
        v-for="(teammate, index) in team"
        :key="index"
        :name="teammate.name"
        :bio="teammate.bio"
        :image="teammate.image"
        :socials="teammate.socials"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'Cheick Sinoussou',
          bio: "Je suis un designer UX/UI dans la conceptualisation et la création de produits numériques, aidant les entreprises et les organismes à but non lucratif à accroître leur capacité d'impact.",
          image: 'https://ui-avatars.com/api/?name=C+S&size=256',
          socials: [
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/cheick-sinoussou-4478a71bb/',
              icon: ['fab', 'linkedin'],
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/nickyofff/',
              icon: ['fab', 'instagram'],
            },
          ],
        },
        {
          name: 'Henri Joel Kouassi',
          bio: "Développeur Fullstack Flutter, Laravel et ReactJS. Passionné d'informatique, d'astrononomie et de sports.",
          image: 'https://ui-avatars.com/api/?name=H+K&size=256',
          socials: [
            {
              name: 'Site web',
              url: 'https://khenrijo.netlify.app',
              icon: ['fas', 'globe'],
            },
            {
              name: 'GitHub',
              url: 'https://github.com/khenrijo21',
              icon: ['fab', 'github'],
            },
          ],
        },
        {
          name: "Alex N'Guessan",
          bio: 'Développeur fullstack Flutter, Node.js et Vue.js. Passionné de web design minimaliste. Amateur de café et grand fan de foot.',
          image: 'https://ui-avatars.com/api/?name=A+N&size=256',
          socials: [
            {
              name: 'Site web',
              url: 'https://marcaureln.com',
              icon: ['fas', 'globe'],
            },
            {
              name: 'GitHub',
              url: 'https://github.com/marcaureln',
              icon: ['fab', 'github'],
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.team--wrapper {
  width: 100%;
  padding: 6rem 2rem;

  @media screen and (min-width: 768px) {
    padding: 6rem 10vw;
  }
}

.team--title {
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
}

.team--grid {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 3rem;
}
</style>
