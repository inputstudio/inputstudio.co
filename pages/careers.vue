<template>
  <main class="flex flex-col gap-y-20 px-9 py-20 md:p-24">
    <section class="section">
      <p class="text-xl">Carrière</p>
      <h1 class="text-8xl font-bold">Nous embauchons</h1>

      <div class="my-20 flex gap-20 text-justify">
        <p class="w-2/5">
          Input studio est toujours ouvert aux personnes intelligentes et créatives. Rejoignez notre équipe de personnes
          partageant les mêmes idées qui s'efforcent d'atteindre leurs objectifs. Travaillons ensemble vers le succès !
          Nous sommes intéressés par la construction d'une communauté d'individus qui partagent nos valeurs et nos
          objectifs.
        </p>

        <div class="w-3/5">
          <CareerProfile
            v-for="(profile, index) in profiles"
            :key="`career-profile-${index}`"
            :position="index"
            :is-open="index === 0"
            :title="profile.title"
            :description="profile.description"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
const profiles = [
  {
    title: 'Developpeur VueJS',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fuga repellat, illo itaque dicta accusamus obcaecati quis autem, architecto quod nisi quisquam assumenda ipsam maiores atque blanditiis, sapiente reprehenderit beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem temporibus ducimus soluta sapiente exercitationem beatae, assumenda ipsa eius ad optio non enim nisi. Molestias delectus quos eos magnam quidem.',
  },
  {
    title: 'Developpeur ReactJS',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fuga repellat, illo itaque dicta accusamus obcaecati quis autem, architecto quod nisi quisquam assumenda ipsam maiores atque blanditiis, sapiente reprehenderit beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem temporibus ducimus soluta sapiente exercitationem beatae, assumenda ipsa eius ad optio non enim nisi. Molestias delectus quos eos magnam quidem.',
  },
  {
    title: 'Developpeur React Native',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fuga repellat, illo itaque dicta accusamus obcaecati quis autem, architecto quod nisi quisquam assumenda ipsam maiores atque blanditiis, sapiente reprehenderit beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem temporibus ducimus soluta sapiente exercitationem beatae, assumenda ipsa eius ad optio non enim nisi. Molestias delectus quos eos magnam quidem.',
  },
  {
    title: 'Developpeur Dart/Flutter',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fuga repellat, illo itaque dicta accusamus obcaecati quis autem, architecto quod nisi quisquam assumenda ipsam maiores atque blanditiis, sapiente reprehenderit beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem temporibus ducimus soluta sapiente exercitationem beatae, assumenda ipsa eius ad optio non enim nisi. Molestias delectus quos eos magnam quidem.',
  },
  {
    title: 'Developpeur PHP',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut fuga repellat, illo itaque dicta accusamus obcaecati quis autem, architecto quod nisi quisquam assumenda ipsam maiores atque blanditiis, sapiente reprehenderit beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem temporibus ducimus soluta sapiente exercitationem beatae, assumenda ipsa eius ad optio non enim nisi. Molestias delectus quos eos magnam quidem.',
  },
];
</script>
