<template>
  <nuxt-link to="/contact" class="home-ghost-card flex items-center justify-between border border-white px-4 py-2">
    <div class="flex items-center gap-2">
      <Icon name="simple-icons:ghost" title="Logo ghost" size="2em" />
      <h2 class="text-2xl font-extralight">GHOST EXPERT</h2>
    </div>

    <div class="flex items-center gap-4">
      <p class="text-md">Contacter-nous pour la création de votre blog</p>
      <Icon name="ic:sharp-arrow-right-alt" title="Right arrow" size="2em" />
    </div>
  </nuxt-link>
</template>

<style lang="scss">
.home-ghost-card {
  $transition-duration: 500ms;

  position: relative;
  isolation: isolate;
  transition: color $transition-duration;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform $transition-duration;
    z-index: -1;
  }

  &:hover {
    color: black;

    &::before {
      transform: scaleX(1);
    }
  }
}
</style>
