<template>
  <section class="flex flex-col gap-10">
    <h1 class="text-6xl font-medium">Nos qualités</h1>
    <p class="text-lg font-light md:w-3/4 md:text-2xl">
      Ces qualités combinées font de nous une agence web créative fiable et performante. Nous nous efforçons de fournir
      des services de haute qualité et de créer des solutions qui répondent aux besoins uniques de nos clients, en
      veillant à leur satisfaction à chaque étape du processus.
    </p>

    <div id="qualities-slide" class="splide" aria-labelledby="carousel-heading">
      <div class="splide__track">
        <ul class="splide__list" :style="{ display: 'grid', gridTemplateColumns: `repeat(${qualities.length}, 1fr)` }">
          <AppCard
            v-for="(quality, index) in qualities"
            :key="`career-quality-${index}`"
            :border-top-left-radius="50"
            class="splide__slide mx-6 h-full min-w-[250px] flex-1 md:min-w-[350px]"
          >
            <template #app-card-body>
              <div class="flex flex-col justify-around gap-5">
                <div class="flex items-center justify-around">
                  <img :src="quality.image" :alt="quality.title" class="aspect-square" />
                  <h2 class="text-2xl font-medium">{{ quality.title }}</h2>
                </div>

                <p class="text-justify text-customGray">{{ quality.description }}</p>
              </div>
            </template>
          </AppCard>
        </ul>
      </div>

      <div class="my-slider-progress mt-5">
        <div ref="progressBar" class="my-slider-progress-bar"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Splide from '@splidejs/splide';
import creativity from '@/assets/img/career/creativity.svg';
import competence from '@/assets/img/career/competence.svg';
import client from '@/assets/img/career/client.svg';
import conception from '@/assets/img/career/conception.svg';
import commitment from '@/assets/img/career/commitment.svg';
import reactivity from '@/assets/img/career/reactivity.svg';

const { hook } = useNuxtApp();

const qualities = [
  {
    image: creativity,
    title: 'Créativité',
    description:
      "Nous sommes passionnés par la créativité et l'innovation, repoussant les limites avec des solutions uniques. Notre équipe de designers et développeurs suit les dernières tendances pour des designs modernes et captivants.",
  },
  {
    image: competence,
    title: 'Compétence technique',
    description:
      'Notre équipe technique qualifiée maîtrise les dernières technologies pour des solutions robustes et évolutives.',
  },
  {
    image: client,
    title: 'Orientation client',
    description:
      'Nous plaçons nos clients au cœur de notre approche, en écoutant attentivement leurs besoins et en favorisant une communication transparente et une collaboration étroite tout au long du projet.',
  },
  {
    image: conception,
    title: 'Excellence de la conception',
    description:
      "Nous accordons une grande importance à la qualité de nos designs, en créant des interfaces conviviales et esthétiques qui optimisent l'expérience utilisateur.",
  },
  {
    image: commitment,
    title: 'Engagement envers la qualité',
    description:
      'Nous sommes déterminés à fournir des solutions de haute qualité à nos clients. Notre objectif est de dépasser les attentes de nos clients et de leur offrir une valeur ajoutée tangible.',
  },
  {
    image: reactivity,
    title: 'Réactivité et flexibilité',
    description:
      'Nous nous efforçons de répondre rapidement aux demandes et aux questions de nos clients. De plus, nous sommes flexibles et nous adaptons aux changements qui peuvent survenir en cours de projet, tout en veillant à respecter les délais convenus.',
  },
];

const progressBar = ref();

const slider = () => {
  const splide = new Splide('.splide', {
    perPage: 4,
    perMove: 3,
    padding: {
      left: '15px',
      right: '15px',
    },
    height: '100%',
    focus: 'center',
    gap: '3em',
    pagination: false,
    autoWidth: true,
    breakpoints: {
      480: {
        perMove: 1,
      },
    },
  });

  // Updates the bar width whenever the carousel moves:
  splide.on('mounted move', function () {
    const end = splide.Components.Controller.getEnd() + 1;
    const rate = Math.min((splide.index + 1) / end, 1);
    progressBar.value.style.width = String(100 * rate) + '%';
  });

  splide.mount();
};

hook('page:finish', slider);
hook('page:transition:finish', slider);
</script>

<style lang="scss">
#qualities-slide {
  .splide__arrow {
    border: 1px solid gray;
    background: rgba(233, 238, 241, 0.1);
    padding: 0.9em;
    border-radius: 50%;

    svg {
      fill: white;
    }
  }

  .my-slider-progress {
    background: gray;
  }

  .my-slider-progress-bar {
    background: white;
    height: 2px;
    transition: width 400ms ease;
    width: 0;
  }
}
</style>
