<template>
  <section class="section flex flex-col justify-center gap-3 px-9 py-20">
    <p class="text-xl font-thin">{{ $t('contact.title') }}</p>

    <div class="flex justify-center">
      <ContactForm />
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'meta.pages.contact',
});
</script>
