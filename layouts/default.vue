<template>
  <Html :lang="locale">
    <Head>
      <Title>{{ title }} — Input Studio</Title>
      <Meta name="description" :content="$t('meta.description')" />
    </Head>
    <Body>
      <main>
        <TheLoader />
        <AppCursor />
        <transition name="fade" mode="out-in">
          <TheNavbar v-if="route.path !== '/'" />
        </transition>
        <slot />

        <transition name="fade" mode="out-in">
          <TheFooter v-if="route.path !== '/'" />
        </transition>
      </main>
    </Body>
  </Html>
</template>

<script lang="ts" setup>
const route = useRoute();
const { locale, t } = useI18n();
const title = computed(() => (route.meta.title ? t(route.meta.title as string) : t('meta.title')));
</script>
