<template>
  <NuxtLink
    to="/contact"
    class="home-ghost-card flex w-screen items-center justify-between px-4 py-1.5 md:relative md:isolate md:w-full md:px-1"
  >
    <NuxtLink to="https://ghost.org/experts/input-studio/" target="_blank">
      <div class="flex items-center gap-3">
        <Icon name="simple-icons:ghost" title="Logo Ghost" size="2em" />
        <h2 class="text-lg font-light uppercase">Ghost Expert</h2>
      </div>
    </NuxtLink>

    <div>
      <div class="flex items-center gap-3">
        <p class="hidden lg:block">Contacter-nous pour la création de votre blog</p>
        <Icon name="ic:sharp-arrow-right-alt" title="Right arrow" size="2em" />
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss">
.home-ghost-card {
  @media (hover: hover) {
    $transition-duration: 500ms;

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
}
</style>
