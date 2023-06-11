<template>
  <div>
    <AppCursor v-if="!$device.isMobileOrTablet" />
    <slot />
  </div>
</template>
