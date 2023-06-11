<template>
  <div>
    <AppCursor v-if="!$device.isMobileOrTablet" />

    <div>
      <AppBackButton />
      <slot />
    </div>
  </div>
</template>
