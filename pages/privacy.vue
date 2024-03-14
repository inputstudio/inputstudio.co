<template>
  <section class="section flex flex-col gap-3 px-9 py-20">
    <ContentRendererMarkdown v-if="content" :value="content" />
  </section>
</template>

<script setup lang="ts">
// @ts-ignore
import markdownParser from '@nuxt/content/transformers/markdown';

const { locale } = useI18n();
const { getSingletonItem } = useDirectusItems();

const data = await getSingletonItem<PrivacyPolicy>({
  collection: 'privacy_policy',
  params: {
    fields: ['*', 'translations.*'],
  },
});

const policy = data.translations.find((translation) => translation.languages_code === locale.value)!.content;
const content = await markdownParser.parse('content', policy);

definePageMeta({
  title: 'meta.pages.privacy',
});
</script>

<style lang="scss">
[data-content-id='content'] {
  h1 {
    @apply my-3 break-all text-5xl font-bold md:text-8xl;
  }

  h2 {
    @apply my-3 text-xl font-bold md:text-2xl;
  }

  p {
    @apply mb-3 text-justify;
  }

  ul {
    @apply list-disc pl-9;
  }
}
</style>
