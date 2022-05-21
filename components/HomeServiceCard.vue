<template>
  <div class="service--card--wrapper">
    <div class="card--content">
      <div class="card--header">
        <ion-icon :name="icon_name"></ion-icon>
        <h2 class="card--title">{{ title }}</h2>
      </div>
      <div class="card--body">
        {{ description }}
      </div>
    </div>
    <div class="card--footer">
      <span class="example" v-for="(example, index) in examples" v-bind:key="index">
        {{ example }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon_name: {
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
  box-shadow: .047em .12em .80em rgba(128, 128, 128, 0.5) ;
  
}

.card--content {
  padding: 1em;
}
.card--header {
  margin: .5em 0;

  ion-icon {
    font-size: 3em;
  }
}

.card--title {
  margin: 1em 0;
}
.card--body {
  padding: 0 .5em;
}

.card--footer {
  padding: 1em;
  display: flex;
  gap: .2em;
}

.example {
  background-color: #111;
  color: white;
  padding: .3em .5em;
  text-transform: capitalize;
}
</style>
