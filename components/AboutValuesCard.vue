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
  mounted() {
    const valueCard = document.querySelectorAll('.value-card--wrapper')

    const showCard = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-fade-down')
        }
      })
    }
    const options = {
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver(showCard, options)

    valueCard.forEach((section) => {
      observer.observe(section)
    })
  },
}
</script>

<style lang="scss" scoped>
.value-card--wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scaleY(0);
  transform-origin: 50% top;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }
}
.card-fade-down {
  @media screen and(max-width: 768px) {
    animation: fade-down 600ms 500ms forwards;
  }

  @media screen and(min-width: 768px) {
    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        animation: fade-down 600ms 500ms * $i forwards;
      }
    }
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
