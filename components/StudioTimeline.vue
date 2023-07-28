<template>
  <section ref="wrapper" class="flex flex-col gap-10">
    <h1 ref="title" class="text-6xl font-medium">Notre processus</h1>
    <p ref="description" class="text-lg font-light md:w-3/4 md:text-2xl">
      Nous nous chargeons de la gestion de votre projet, de sa phase de lancement jusqu'à son déploiement.
    </p>

    <div class="grid grid-cols-1 pt-10 md:pt-0">
      <StudioTimelineItem
        class="timeline-item"
        title="Planifier une réunion"
        description="Nous avons une réunion pour définir la portée du projet et savoir quelles sont vos attentes"
        :has-button="true"
        button-text="Planifier une reunion"
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
const { $gsap, $ScrollTrigger } = useNuxtApp();
const { openCalendly } = useCalendlyWidget();

$gsap.registerPlugin($ScrollTrigger);

const items = [
  {
    title: 'Design',
    description:
      'Nos concepteurs rédigent soigneusement la première version pour votre examen qui passe ensuite par autant de révisions que nécessaire.',
  },
  {
    title: 'Intégration',
    description:
      "Notre équipe technique possède une expertise approfondie dans le domaine de l'intégration et utilise les meilleures pratiques pour garantir des intégrations fluides, sécurisées et évolutives. Nous veillons à ce que toutes les composantes de votre écosystème numérique fonctionnent harmonieusement ensemble, offrant une expérience utilisateur cohérente et une gestion efficace des données.",
  },
  {
    title: 'Livraison du projet',
    description:
      'Nous mettons tout en œuvre pour respecter les délais convenus et livrer votre projet dans les délais prévus, tout en maintenant la qualité et la satisfaction du client au cœur de notre travail.',
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
