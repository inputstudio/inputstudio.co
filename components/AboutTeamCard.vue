<template>
  <div class="team-card--wrapper">
    <img :src="image" :alt="'Photo de ' + name" />
    <h3 class="name">{{ name }}</h3>
    <p class="bio">{{ bio }}</p>
    <div class="socials">
      <div v-for="(social, index) in socials" :key="index">
        <a :href="social.url" target="_blank" rel="noopener noreferrer" :title="social.name">
          <fa class="icon" :icon="social.icon" size="2x" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    socials: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.team-card--wrapper {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 256px;
  height: 256px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.8;
  }

  @media screen and(max-width: 768px) {
    width: 128px;
    height: 128px;
  }
}

.name {
  margin-bottom: 1rem;
  transition: color 0.1s;

  &:hover {
    color: #444;
  }
}

.bio {
  color: #333;
  text-align: justify;
  margin-bottom: 1rem;
}

.socials {
  display: flex;
  gap: 1rem;
}
</style>
