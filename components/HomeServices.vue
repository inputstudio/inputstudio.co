<template>
  <div id="services" class="services--wrapper animated--section">
    <div class="services--header">
      <div class="services--title">
        <h1>Nos services</h1>

        <nuxt-link :to="{ path: '/', hash: '#team' }">
          <ion-icon name="arrow-down" size="large"></ion-icon>
        </nuxt-link>
      </div>

      <div class="services--desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi sequi deleniti? Assumenda nam numquam
          pariatur, animi non, corrupti tempore voluptas temporibus magnam, itaque possimus asperiores perspiciatis ipsa
          fuga? Aliquam.
        </p>
      </div>
    </div>

    <div class="services--grid">
      <HomeServiceCard
        v-for="(service, index) in services"
        :key="index"
        :icon_name="service.icon_name"
        :title="service.title"
        :description="service.description"
      />

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          icon_name: 'globe',
          title: 'Applications web',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
          icon_name: 'phone-portrait',
          title: 'Applications mobiles',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
          icon_name: 'school',
          title: 'Refactoring',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
          icon_name: 'albums',
          title: 'Maquette',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.services--wrapper {
  width: 60vw;
  padding: 6rem 0;
  margin: auto;
  margin-bottom: 6rem;
  border-bottom: 1px solid #000;
}

.services--header {
  display: flex;
  margin-bottom: 3rem;
}

.services--title {
  width: 40%;
  flex-shrink: 0;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
}

.services--grid {
  @media screen and(max-width: 768px) {
    display:flex;
    flex-direction: column;
  }
  @media screen and(min-width: 768px) {
    padding: 2em 0;
    display: grid;
    grid-template-columns: 48% 48%;
  }

  gap: 1em;
  justify-content: center;
  align-items: center;
}
</style>
