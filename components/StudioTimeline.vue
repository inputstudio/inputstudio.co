<template>
  <section ref="wrapper" class="flex flex-col gap-10">
    <h1 ref="title" class="text-6xl font-medium">{{ $t('studio.timeline.title') }}</h1>
    <p ref="description" class="text-lg font-light md:w-3/4 md:text-2xl">{{ $t('studio.timeline.description') }}</p>

    <div class="grid grid-cols-1 pt-10 md:pt-0">
      <StudioTimelineItem
        class="timeline-item"
        :title="$t('calendly.plan-meeting')"
        :description="$t('calendly.purpose')"
        :button-text="$t('calendly.plan-meeting')"
        :button-action="openCalendly"
      />

      <StudioTimelineItem
        v-for="(item, index) in items"
        :key="`timeline-item-${index}`"
        class="timeline-item"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const { $gsap, $ScrollTrigger } = useNuxtApp();
const { openCalendly } = useCalendlyWidget();

$gsap.registerPlugin($ScrollTrigger);

const items = [
  {
    title: t('studio.timeline.design'),
    description: t('studio.timeline.design-desc'),
  },
  {
    title: t('studio.timeline.integration'),
    description: t('studio.timeline.integration-desc'),
  },
  {
    title: t('studio.timeline.delivery'),
    description: t('studio.timeline.delivery-desc'),
  },
];

const wrapper = ref();
const title = ref();
const description = ref();

useAnimation(animation);

function animation() {
  fadeAnimation(wrapper.value, [title.value, description.value]);

  const bars = document.querySelectorAll('.timeline-item');

  bars.forEach((bar) => {
    const separator = bar.querySelector('.separator') as HTMLElement;
    const ball = bar.querySelector('.separator > .ball');
    const title = bar.querySelector('h1');
    const description = bar.querySelector('p');
    const button = bar.querySelector('button');
    const background = bar.querySelector('.separator > span');

    $gsap
      .timeline({
        scrollTrigger: {
          trigger: separator,
          scrub: true,
          start: 'top 80%',
          end: '+=' + separator.offsetHeight,
        },
      })
      .to(ball, {
        width: '2px',
        padding: '2px',
      })
      .fromTo(title, { autoAlpha: 0 }, { autoAlpha: 1 })
      .fromTo(description, { autoAlpha: 0 }, { autoAlpha: 1 })
      .fromTo(button, { autoAlpha: 0 }, { autoAlpha: 1 })
      .to(background, {
        height: '100%',
      });
  });
}
</script>
