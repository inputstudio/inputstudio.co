<template>
  <div class="flex flex-col gap-y-20 py-20">
    <section class="section">
      <p class="text-xl font-thin">Studio</p>
      <h1 class="text-3xl font-bold md:text-8xl">
        Nous ne réalisons pas de sites mais des
        <AppExperienceText circle-class="-translate-x-4 -translate-y-16 md:-translate-y-8 md:-translate-x-0" />.
      </h1>

      <AppScrollIndicator class="absolute bottom-0 left-1/2 -translate-x-1/2" />
    </section>

    <section class="section flex w-full items-center justify-center text-center">
      <p class="text-xl md:text-2xl">
        Input studio est une agence web <span class="font-bold">100% REMOTE</span> à Abidjan. Avec nous, construire un
        site web est bien plus que simplement installer un logiciel de conception et faire de l'intégration.
      </p>
    </section>

    <section class="section flex w-full items-center justify-center text-center">
      <p class="text-xl md:text-2xl">
        En effet, notre équipe vous accompagne dans une démarche de planification, de choix technologique, de
        développement et de maintenance web.
      </p>
    </section>

    <section class="section flex w-full items-center justify-center text-center">
      <p class="text-xl md:text-2xl">
        Notre agence web créative propose une approche complète, de la conception à la mise en ligne. Nous combinons des
        compétences en design, en développement et en déploiement pour offrir à nos clients des sites web remarquables
        qui reflètent leur identité, captivent leur public et atteignent leurs objectifs commerciaux.
      </p>
    </section>

    <StudioActivities class="section" />
    <StudioTimeline class="section" />
    <StudioQualities class="section" />
    <AppLetsStart />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.section {
  @apply px-9;
}
</style>
