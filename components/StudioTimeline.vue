<template>
  <section class="flex flex-col gap-10">
    <h1 class="text-6xl font-medium">Notre processus</h1>
    <p class="text-lg font-light md:w-3/4 md:text-2xl">
      Nous nous chargeons de la gestion de votre projet, de sa phase de lancement jusqu'à son déploiement.
    </p>

    <div class="grid grid-cols-1 self-center">
      <StudioTimelineItem
        title="Planifier une réunion"
        description="Nous avons une réunion pour définir la portée du projet et savoir quelles sont vos attentes"
        :has-button="true"
        button-text="Planifier une reunion"
        :button-action="openCalendly"
      />

      <StudioTimelineItem
        v-for="(item, index) in items"
        :key="`timeline-item-${index}`"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const { openCalendly } = useCalendlyWidget();

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
</script>
