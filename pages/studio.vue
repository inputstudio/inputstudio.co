<template>
  <main class="flex flex-col gap-y-20 px-9 py-20 md:p-24">
    <section class="section">
      <p class="text-xl">Studio</p>
      <h1 class="text-8xl font-bold">
        Nous ne réalisons pas de sites mais des
        <AppExperienceText />.
      </h1>

      <AppScrollIndicator />
    </section>

    <section class="section flex w-full items-center justify-center text-center">
      <p class="text-2xl">
        Input studio est une agence web <span class="font-bold">100% REMOTE</span> à Abidjan. Avec nous, construire un
        site web est bien plus que simplement installer un logiciel de conception et faire de l'intégration.
      </p>
    </section>

    <section class="section flex w-full items-center justify-center text-center">
      <p class="text-2xl">
        En effet, notre équipe vous accompagne dans une démarche de planification, de choix technologique, de
        développement et de maintenance web.
      </p>
    </section>

    <section class="section flex w-full items-center justify-center text-center">
      <p class="text-2xl">
        Notre agence web créative propose une approche complète, de la conception à la mise en ligne. Nous combinons des
        compétences en design, en développement et en déploiement pour offrir à nos clients des sites web remarquables
        qui reflètent leur identité, captivent leur public et atteignent leurs objectifs commerciaux.
      </p>
    </section>

    <CareerActivities />

    <CareerQualities />
  </main>
</template>
