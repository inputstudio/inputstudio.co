<template>
  <section class="section prose prose-invert m-auto px-3 py-32 lg:prose-xl">
    <ContentRenderer v-if="page" :key="page._id" :value="page.body">
      <ContentRendererMarkdown :value="page" />
    </ContentRenderer>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'meta.pages.privacy',
});

const {
  locale: { value: localCode },
} = useI18n();

const { data: page } = await useAsyncData(`/${localCode}`, () =>
  queryContent(`/`).where({ _locale: localCode }).findOne()
);
</script>
