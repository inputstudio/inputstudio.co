<template>
  <div class="service-card--wrapper">
    <div class="card--content">
      <div class="card--header">
        <fa class="icon" :icon="['fas', icon]" />
        <h3 class="card-title">{{ title }}</h3>
      </div>
      <div class="card--body">
        {{ description }}
      </div>
    </div>
    <div class="card--footer">
      <p v-for="(example, index) in examples" :key="index" class="example">
        {{ example }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
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
    examples: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const serviceCard = document.querySelectorAll('.service-card--wrapper')

    const showCard = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-fade-down')

          setTimeout(
            () => {
              entry.target.querySelectorAll('.example').forEach((element) => {
                element.classList.add('example-fade-in')
              })
            },
            window.screen.width < 768 ? 100 : 2500
          )
        }
      })
    }
    const options = {
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver(showCard, options)

    serviceCard.forEach((section) => {
      observer.observe(section)
    })
  },
}
</script>

<style lang="scss" scoped>
.service-card--wrapper {
  height: 28em;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transform: scaleY(0);
  transform-origin: 50% top;
  background: darken($color: $primary, $amount: 5);

  @media screen and(max-width: 768px) {
    width: 90%;
    height: auto;
  }
}

.card--content {
  padding: 0.5em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and(max-width: 768px) {
    margin: 2rem 0;
  }
}

.card--header {
  margin: 0.2em 0;
}

.card-title {
  margin: 0.8em 0;
}

.card--body {
  color: #ddd;

  @media screen and(max-width: 768px) {
    margin-bottom: 1rem;
  }
}

.card--footer {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.example {
  background: darken($color: $primary, $amount: 10);
  color: white;
  padding: 0.3em 0.5em;
  text-transform: capitalize;
  opacity: 0;
}

.icon {
  font-size: 3em;

  @media screen and(max-width: 768px) {
    font-size: 2em;
  }
}

.card-fade-down {
  @media screen and(max-width: 768px) {
    animation: fade-down 600ms 800ms;
    animation-fill-mode: forwards;
  }

  @media screen and(min-width: 768px) {
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        animation: fade-down 600ms 800ms * $i;
        animation-fill-mode: forwards;
      }
    }
  }
}

.example-fade-in {
  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      animation: fade-in 300ms 0.5s * $i;
      animation-fill-mode: forwards;
    }
  }
}
</style>
