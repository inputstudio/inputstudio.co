<template>
  <section ref="wrapper" class="letstart__wrapper flex flex-col gap-10 py-9">
    <h1 ref="title" class="letstart__wrapper__title px-9 text-6xl font-medium">{{ $t('studio.qualities.title') }}</h1>
    <p ref="description" class="letstart__wrapper__description px-9 text-lg font-light md:w-3/4 md:text-2xl">
      {{ $t('studio.qualities.subtitle') }}
    </p>

    <div id="qualities-slide" class="splide px-0" aria-labelledby="carousel-heading">
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
// eslint-disable-next-line import/no-named-as-default
import Splide from '@splidejs/splide';
import creativity from '@/assets/img/career/creativity.svg';
import competence from '@/assets/img/career/competence.svg';
import client from '@/assets/img/career/client.svg';
import conception from '@/assets/img/career/conception.svg';
import commitment from '@/assets/img/career/commitment.svg';
import reactivity from '@/assets/img/career/reactivity.svg';

const { t } = useI18n();

const qualities = [
  {
    image: creativity,
    title: t('studio.qualities.creativity'),
    description: t('studio.qualities.creativity-desc'),
  },
  {
    image: competence,
    title: t('studio.qualities.competence'),
    description: t('studio.qualities.competence-desc'),
  },
  {
    image: client,
    title: t('studio.qualities.client'),
    description: t('studio.qualities.client-desc'),
  },
  {
    image: conception,
    title: t('studio.qualities.conception'),
    description: t('studio.qualities.conception-desc'),
  },
  {
    image: commitment,
    title: t('studio.qualities.commitment'),
    description: t('studio.qualities.commitment-desc'),
  },
  {
    image: reactivity,
    title: t('studio.qualities.reactivity'),
    description: t('studio.qualities.reactivity-desc'),
  },
];

const progressBar = ref();
const wrapper = ref();
const title = ref();
const description = ref();

useAnimation(animationAndSlider);

function animationAndSlider() {
  initSlider();
  fadeAnimation(wrapper.value, [title.value, description.value]);
}

function initSlider() {
  const splide = new Splide('.splide', {
    perPage: 4,
    perMove: 3,
    padding: {
      left: '25px',
      right: '25px',
    },
    height: '100%',
    focus: 'center',
    gap: '3em',
    pagination: false,
    autoWidth: true,
    breakpoints: {
      480: {
        perMove: 1,
        padding: {
          left: '15px',
          right: '15px',
        },
      },
    },
  });

  // Updates the bar width whenever the carousel moves:
  splide.on('mounted move', () => {
    const end = splide.Components.Controller.getEnd() + 1;
    const rate = Math.min((splide.index + 1) / end, 1);
    progressBar.value.style.width = String(100 * rate) + '%';
  });

  splide.mount();
}
</script>

<style lang="scss">
#qualities-slide {
  .splide__arrow {
    border: 1px solid gray;
    background: rgba(233, 238, 241, 0.1);
    padding: 0.9em;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
      padding: 1em;
      width: 50px;
      height: 50px;
    }

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
