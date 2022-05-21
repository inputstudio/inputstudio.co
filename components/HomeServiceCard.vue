<template>
  <div class="service--card--wrapper">
    <div class="card--content">
      <div class="card--header">
        <ion-icon :name="iconName"></ion-icon>
        <h2 class="card--title">{{ title }}</h2>
      </div>
      <div class="card--body">
        {{ description }}
      </div>
    </div>
    <div class="card--footer">
      <p v-for="(example, index) in examples" v-bind:key="index" class="example">
        {{ example }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
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
  width: 25em;
  box-shadow: .047em .12em .80em rgba(128, 128, 128, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  transform: scaleY(0);
  transform-origin: 50% top;
  animation: fade-down 1s 1s;
  animation-fill-mode: forwards;
}

.card--content {
  padding: .5em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.card--header {
  margin: .2em 0;

  ion-icon {
    font-size: 3em;
  }
}

.card--title {
  margin: .8em 0;
}

.card--footer {
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  gap: .2em;
}

.example {
  background-color: #111;
  color: white;
  padding: .3em .5em;
  text-transform: capitalize;
  opacity: 0;

  @for $i from 1 through 6 {
      &:nth-child(#{$i}){
        animation: fade-in 300ms 1s * $i;
        animation-fill-mode: forwards;
    }
  }
}

@keyframes fade-down {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
  }
}
</style>
