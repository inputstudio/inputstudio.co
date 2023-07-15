<template>
  <div ref="wrapper" class="gap-x-30 flex h-screen w-[300vw] flex-nowrap">
    <div class="text-section grid w-screen place-items-center">
      <p class="w-4/5 text-center text-xl md:text-2xl">
        Input studio est une agence web <span class="font-bold">100% REMOTE</span> à Abidjan. Avec nous, construire un
        site web est bien plus que simplement installer un logiciel de conception et faire de l'intégration.
      </p>
    </div>

    <div class="text-section grid w-screen place-items-center">
      <p class="w-4/5 text-center text-xl md:text-2xl">
        En effet, notre équipe vous accompagne dans une démarche de planification, de choix technologique, de
        développement et de maintenance web.
      </p>
    </div>

    <div class="text-section grid w-screen place-items-center">
      <p class="w-4/5 text-center text-xl md:text-2xl">
        Notre agence web créative propose une approche complète, de la conception à la mise en ligne. Nous combinons des
        compétences en design, en développement et en déploiement pour offrir à nos clients des sites web remarquables
        qui reflètent leur identité, captivent leur public et atteignent leurs objectifs commerciaux.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
const { hook } = useNuxtApp();

gsap.registerPlugin(ScrollTrigger);

const wrapper = ref();
const setupHorizontalScroll = () => {
  const sections = gsap.utils.toArray('.text-section');

  if (!sections.length) return;

  gsap.to(sections, {
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
};

hook('page:finish', setupHorizontalScroll);
hook('page:transition:finish', setupHorizontalScroll);
</script>
