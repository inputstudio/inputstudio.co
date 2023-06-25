<template>
  <main class="px-9 py-20 md:p-24">
    <p class="text-xl">Studio</p>
    <h1 class="text-8xl font-bold">
      Nous ne réalisons pas de sites mais des
      <AppExperienceText :text-class="'font-thin'" :circle-class="'-translate-y-8'" />.
    </h1>

    <AppScrollIndicator />

    <CareerActivities />
  </main>
</template>
