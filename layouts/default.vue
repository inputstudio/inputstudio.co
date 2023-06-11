<template>
  <main>
    <AppCursor v-if="!$device.isMobileOrTablet" />
    <slot />
  </main>
</template>
