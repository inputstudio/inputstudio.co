<template>
  <div class="flex flex-col gap-3">
    <h2 class="relative mb-10 hidden text-6xl uppercase md:text-8xl lg:block">
      Think outside <br />
      the box
    </h2>

    <p class="text-xl font-thin lg:hidden">{{ $t('contact.form-alt') }}</p>

    <div class="flex flex-col gap-6 text-xl">
      <div class="flex flex-col gap-1">
        <h3 class="text-gray-500">{{ $t('contact.form-alt-email') }}</h3>
        <a class="font-bold transition-colors md:hover:text-neutral-300" href="mailto:hello@inputstudio.co">
          hello@inputstudio.co
        </a>
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="text-gray-500">{{ $t('contact.form-alt-phone') }}</h3>
        <a class="text-xl font-bold transition-colors md:hover:text-neutral-300" href="tel:+2250769561650">
          +225 07 69 56 16 50
        </a>
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="text-gray-500">{{ $t('contact.form-alt-address') }}</h3>
        <p class="text-xl font-bold">Planet Earth</p>
      </div>
    </div>
  </div>
</template>
