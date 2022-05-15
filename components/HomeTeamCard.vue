<template>
  <div class="team--card--wrapper">
    <img :src="image" :alt="'Photo de ' + name" />
    <h2 class="name">
      <a :href="social" target="_blank" rel="noopener noreferrer">
        {{ name }}
      </a>
    </h2>
    <p class="bio">{{ bio }}</p>
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
    social: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.team--card--wrapper {
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
}

.name {
  margin-bottom: 1rem;
  transition: color 0.1s;

  &:hover {
    color: #444;
  }
}

.bio {
  font-size: 1.2rem;
  color: #333;
  text-align: justify;
}
</style>
