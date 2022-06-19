<template>
  <div class="wrapper">
    <HomeHero />
    <HomeAbout />
    <AppServices />
    <AppContact />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  scrollToTop: true,
  head() {
    return {
      title: 'Input Studio - Agence de développement web',
    }
  },
}
</script>
