<template>
  <section class="flex flex-col items-center gap-6 md:gap-9 xl:gap-12">
    <h1
      id="animated-title"
      class="cursor-expander flex flex-col gap-4 text-center font-bold leading-normal md:flex-row"
    >
      <div id="design" class="text-6xl md:text-8xl">Design.</div>
      <div id="code" class="text-5xl md:text-8xl">Code.</div>
      <div id="deploy" class="text-4xl md:text-8xl">Deploy.</div>
    </h1>

    <p class="text-center font-light md:w-1/2 md:text-xl 2xl:text-2xl">{{ $t('home.subtitle') }}</p>

    <div class="mb-12 flex flex-col items-center gap-5 md:gap-3">
      <HomeHeroTechnos />
      <HomeHeroGhostBanner />
    </div>
  </section>
</template>

<script lang="ts" setup>
import SplitText from 'split-type';

const { $gsap } = useNuxtApp();

useAnimation(animation);

function animation() {
  const design = new SplitText('#design', { types: 'chars' });
  const designChars = design.chars;
  const code = document.querySelector('#code');
  const deploy = document.querySelector('#deploy');
  const tl = $gsap.timeline({
    defaults: {
      duration: 1,
    },
  });

  tl.fromTo(designChars, { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05, ease: 'power2.inOut' });
  tl.fromTo(code, { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power2.out' });
  tl.to(deploy, { y: -100, autoAlpha: 0, ease: 'power1.out' });
  tl.to(deploy, { y: 0, autoAlpha: 1, ease: 'power4.inOut' });

  document.querySelector('#animated-title')?.addEventListener('mouseenter', () => {
    if (!tl.isActive()) {
      tl.play(0);
    }
  });
}
</script>
