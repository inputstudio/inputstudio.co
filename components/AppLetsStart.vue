<template>
  <section ref="wrapper" class="section grid min-h-screen place-items-center">
    <div class="flex flex-col items-center gap-y-3 text-center">
      <h1 class="fadeable mb-6 text-4xl leading-tight md:text-8xl">
        {{ $t('app.lets-start') }} <AppExperienceText /> {{ $t('app.together') }}
      </h1>

      <CalendlyButton class="fadeable"> {{ $t('calendly.plan-meeting') }} </CalendlyButton>

      <p class="fadeable">ou</p>

      <NuxtLink class="fadeable" to="/contact">
        <span class="mr-1 underline">{{ $t('app.contact') }}</span>
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
