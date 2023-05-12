<template>
  <div>
    <AppBackButton />

    <main class="flex h-full flex-col items-center justify-center gap-5 p-5 md:flex-row">
      <ContactForm />

      <div class="rounded-md bg-gray-200 p-4"></div>
    </main>
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck 230

useHead({
  title: 'Input Studio — Nous contacter',
});
</script>

<style lang="scss">
#contact-form {
  input,
  select,
  textarea {
    border-radius: 10px;
    padding: 12px 10px;
    background-color: white;
    color: gray;
    width: 100%;
    resize: none;
  }
}
</style>
