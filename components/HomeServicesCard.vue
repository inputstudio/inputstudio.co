<template>
  <div class="service--card--wrapper">
    <div class="card--content">
      <div class="card--header">
        <ion-icon :name="icon"></ion-icon>
        <h2 class="card--title">{{ title }}</h2>
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
}
</script>

<style lang="scss" scoped>
.service--card--wrapper {
  height: 28em;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transform: scaleY(0);
  transform-origin: 50% top;
  background: lighten($color: #2b00d4, $amount: 5);

  @media screen and(max-width: 768px) {
    width: 90%;
  }
}

.card--content {
  padding: 0.5em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.card--header {
  margin: 0.2em 0;

  ion-icon {
    font-size: 3em;
  }
}

.card--title {
  margin: 0.8em 0;
}

.card--body {
  color: #ddd;
}

.card--footer {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.example {
  background: lighten($color: #2b00d4, $amount: 15);
  color: white;
  padding: 0.3em 0.5em;
  text-transform: capitalize;
  opacity: 0;
}

.card-fade-down {
  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      animation: fade-down 800ms 1s * $i;
      animation-fill-mode: forwards;
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
