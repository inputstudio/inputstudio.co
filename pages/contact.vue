<template>
  <section class="section flex flex-col justify-center gap-3 px-9 py-20">
    <span class="text-xl font-thin">Nous contacter</span>
    <h1 class="relative mb-10 text-3xl font-bold lg:w-1/2 lg:text-8xl">Réalisons votre projet ensemble !</h1>

    <div class="flex flex-col justify-center gap-12 lg:flex-row">
      <ContactForm />
      <ContactMore />
    </div>
  </section>
</template>

<script lang="ts" setup>
useHead({
  title: 'Nous contacter',
});
</script>
