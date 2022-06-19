<template>
  <div class="wrapper">
    <ProcessHero />

    <div id="firstToggle" class="toggle--wrapper">
      <p>Maquettes</p>

      <label class="toggle-btn">
        <input v-model="isChecked" type="checkbox" />
        <span></span>
      </label>

      <p>Applications</p>
    </div>

    <ProcessMockup v-if="!isChecked" />
    <ProcessApp v-else />

    <div class="toggle--wrapper">
      <p>Maquettes</p>

      <label id="secondToggle" class="toggle-btn">
        <input v-model="isChecked" type="checkbox" />
        <span></span>
      </label>

      <p>Applications</p>
    </div>
    <AppContact />
  </div>
</template>

<script>
export default {
  data() {
    return { isChecked: false }
  },
  head() {
    return {
      title: 'Comment travaillons-nous ? - Input Studio',
    }
  },
  mounted() {
    const firstTogglePosition = document.getElementById('firstToggle').getBoundingClientRect()
    const secondToggle = document.getElementById('secondToggle')

    secondToggle.addEventListener('click', () => {
      window.scrollTo({
        top: firstTogglePosition.top,
        behavior: 'smooth',
      })
    })
  },
}
</script>

<style lang="scss" scoped>
.toggle--wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  gap: 2em;
}
.toggle-btn {
  position: relative;
  display: inline-block;
  width: 4em;
  height: 1.5em;
  overflow: hidden;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background: $primary;
    }

    &:checked + span::before {
      left: 2.7em;
    }
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $secondary;
    border-radius: 0.8em;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 0.2em;
      width: 1em;
      height: 1em;
      background: white;
      border-radius: 50%;
      transform: translateY(-50%);
      transition: all 0.5s;
    }
  }
}
</style>
