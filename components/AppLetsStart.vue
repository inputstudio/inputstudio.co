<template>
  <section ref="wrapper" class="section grid min-h-screen place-items-center">
    <div class="flex flex-col items-center gap-y-3 text-center">
      <h1 class="fadeable mb-6 text-4xl leading-tight md:text-8xl">Demarrons votre <AppExperienceText /> ensemble !</h1>

      <CalendlyButton class="fadeable"> Planifier une réunion </CalendlyButton>

      <p class="fadeable">ou</p>

      <NuxtLink class="fadeable" to="/contact">
        <span class="mr-1 underline">Soumettre un projet</span>
        <IconCSS name="ic:baseline-arrow-outward" class="text-xl" />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $gsap, $ScrollTrigger } = useNuxtApp();

$gsap.registerPlugin($ScrollTrigger);

const wrapper = ref();

useAnimation(animation);

function animation() {
  const fadeables = $gsap.utils.toArray('.fadeable');

  $gsap
    .timeline({
      scrollTrigger: {
        trigger: wrapper.value,
        start: 'top 80%',
        toggleActions: 'restart none none reset',
      },
    })
    .from(fadeables, { autoAlpha: 0, y: -30, stagger: 0.5 });
}
</script>
