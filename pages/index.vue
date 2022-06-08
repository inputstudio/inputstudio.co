<template>
  <div class="wrapper">
    <HomeHero />
    <HomeAbout />
    <HomeServices />
    <AppContact />
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
}
</script>
