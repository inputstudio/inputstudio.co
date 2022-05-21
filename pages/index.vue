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
    const animatedSections = document.querySelectorAll('.animated--section')

    const showSection = (entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && entry.target.classList.add('show')
      })
    }

    const options = {
      rootMargin : '0px',
      threshold: .2
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
  transform: scale(0);
}

.show {
  animation: puff-in-hor 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}

@keyframes puff-in-hor {
  0% {
    transform: scaleX(2);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    filter: blur(0px);
    opacity: 1;
  }
}
</style>
