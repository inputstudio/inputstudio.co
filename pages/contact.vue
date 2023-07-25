<template>
  <section class="section flex flex-col justify-center gap-3 px-9 py-20">
    <p class="text-xl font-thin">{{ $t('contact.title') }}</p>
    <h1 class="mb-10 text-3xl font-bold md:text-8xl 2xl:w-1/2">{{ $t('contact.subtitle') }}</h1>

    <div class="flex flex-col justify-center gap-12 md:flex-row">
      <ContactForm />
      <ContactMore />
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'meta.pages.contact',
});
</script>
