<template>
  <div class="flex gap-9 md:items-center" :class="{ 'moving-text': $device.isMobileOrTablet }">
    <div v-for="technology in technologies" :key="technology.logo" :title="technology.title">
      <Icon
        :name="technology.logo"
        size="xl"
        class="tech-logo max-h-12 w-10 md:w-12 md:shrink-0 md:transition-transform md:hover:scale-110"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const technologies = [
  {
    title: 'Figma',
    logo: 'ph:figma-logo',
  },
  {
    title: 'Sketch',
    logo: 'ph:sketch-logo',
  },
  {
    title: 'Vue.js',
    logo: 'mdi:vuejs',
  },
  {
    title: 'Nuxt.js',
    logo: 'simple-icons:nuxtdotjs',
  },
  {
    title: 'React.js',
    logo: 'mdi:react',
  },
  {
    title: 'Next.js',
    logo: 'teenyicons:nextjs-solid',
  },
  {
    title: 'Tailwind CSS',
    logo: 'mdi:tailwind',
  },
  {
    title: 'Laravel',
    logo: 'mdi:laravel',
  },
  {
    title: 'Flutter',
    logo: 'material-symbols:flutter',
  },
  {
    title: 'Google Cloud Platform',
    logo: 'mdi:google-cloud',
  },
  {
    title: 'DigitalOcean',
    logo: 'mdi:digital-ocean',
  },
];
</script>

<style lang="scss">
/* The animation */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* media query to enable animation for only those who want it */
@media (prefers-reduced-motion: no-preference) {
  .moving-text {
    width: 230vw;
    animation: marquee 12s linear infinite backwards;
  }
}
</style>
