<template>
  <div class="wrapper">
    <ProcessHero />

    <div id="toggle--wrapper">
      <p>Maquettes</p>

      <label id="toggle-btn">
        <input v-model="isChecked" type="checkbox" />
        <span></span>
      </label>

      <p>Applications</p>
    </div>

    <ProcessMockup v-if="!isChecked" />
    <ProcessApp v-else />
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
    const toggleWrapper = document.getElementById('toggle--wrapper')

    const toggleBtn = document.getElementById('toggle-btn')

    const toggleWrapperPosition = toggleWrapper.offsetTop

    window.addEventListener('scroll', () => {
      if (window.scrollY >= toggleWrapperPosition) {
        toggleWrapper.classList.add('sticky')
      } else {
        toggleWrapper.classList.remove('sticky')
      }
    })

    toggleBtn.addEventListener('click', () => {
      window.scrollTo({
        top: toggleWrapperPosition - 10,
        behavior: 'smooth',
      })
    })
  },
}
</script>

<style lang="scss" scoped>
#toggle--wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  gap: 2em;
}

#toggle-btn {
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
      left: 68%;
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
      left: 6%;
      width: 1em;
      height: 1em;
      background: white;
      border-radius: 50%;
      transform: translateY(-50%);
      transition: all 0.5s;
    }
  }
}
.sticky {
  z-index: 200;
  background-color: whitesmoke;
  position: fixed;
  top: 0;
}
</style>
