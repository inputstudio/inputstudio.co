<template>
  <div ref="wrapper" class="gap-x-30 flex h-screen w-[300vw] flex-nowrap">
    <div class="text-section grid w-screen place-items-center">
      <p class="w-4/5 text-center text-xl md:text-2xl 2xl:w-2/3">{{ $t('studio.slider.slide1') }}</p>
    </div>

    <div class="text-section grid w-screen place-items-center">
      <p class="w-4/5 text-center text-xl md:text-2xl 2xl:w-2/3">{{ $t('studio.slider.slide2') }}</p>
    </div>

    <div class="text-section grid w-screen place-items-center">
      <p class="w-4/5 text-center text-xl md:text-2xl 2xl:w-2/3">{{ $t('studio.slider.slide3') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();

const wrapper = ref();

useAnimation(animation);

function animation() {
  const sections = $gsap.utils.toArray('.text-section');

  if (!sections.length) return;

  $gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: wrapper.value,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => '+=' + wrapper.value.offsetWidth,
      invalidateOnRefresh: true,
    },
  });
}
</script>
