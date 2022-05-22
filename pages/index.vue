<template>
  <div class="wrapper">
    <HomeHero />
    <HomeAbout />
    <HomeServices />
    <HomeTeam />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Input Studio - Agence de développement web',
    }
  },
  mounted() {
    const servicesCardTimeout = 100

    const animatedSections = document.querySelectorAll('.animated--section')

    const showSection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')

          if (entry.target.classList.contains('services--wrapper')) {
            setTimeout(() => {
              document.querySelectorAll('.service--card--wrapper').forEach((element) => {
                element.classList.add('card-fade-down')
              })
            }, servicesCardTimeout)

            setTimeout(() => {
              document.querySelectorAll('.example').forEach((element) => {
                element.classList.add('example-fade-in')
              })
            }, servicesCardTimeout + 3200)
          }
        }
      })
    }

    const options = {
      rootMargin: '0px',
    }

    const observer = new IntersectionObserver(showSection, options)

    animatedSections.forEach((section) => {
      observer.observe(section)
    })
  },
}
</script>
<style lang="scss" scoped>
.animated--section {
  opacity: 0;
  transform: scaleY(0);
}

.show {
  animation: scale-in-ver-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes scale-in-ver-top {
  0% {
    transform: scaleY(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
</style>
