<template>
  <section class="section px-9 py-20">
    <p class="text-xl font-thin">Carrière</p>
    <h1 class="text-3xl font-bold md:text-8xl">Nous embauchons</h1>

    <div class="my-8 flex flex-col gap-20 text-justify md:my-20 md:flex-row">
      <p class="md:w-2/5">
        Input studio est toujours ouvert aux personnes intelligentes et créatives. Rejoignez notre équipe de personnes
        partageant les mêmes idées qui s'efforcent d'atteindre leurs objectifs. Travaillons ensemble vers le succès !
        Nous sommes intéressés par la construction d'une communauté d'individus qui partagent nos valeurs et nos
        objectifs.
      </p>

      <div class="md:w-3/5">
        <CareerProfile
          v-for="(job, index) in jobs"
          :key="`career-profile-${job.id}`"
          :position="index"
          :is-open="index === 0"
          :last-item="index + 1 === jobs.length"
          :title="job.title"
          :description="job.description"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { getItems } = useDirectusItems();
const jobs = await getItems<Job>({ collection: 'careers' });
</script>
