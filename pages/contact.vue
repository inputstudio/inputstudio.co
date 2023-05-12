<template>
  <div>
    <AppBackButton />

    <main class="flex h-full flex-col justify-center gap-5 px-8 py-16 md:flex-row md:px-24 md:py-24">
      <ContactForm />

      <section class="flex flex-col rounded-md p-4">
        <h1 class="mb-10 text-6xl uppercase md:text-8xl">THINK OUTSIDE THE BOX</h1>

        <div class="grid h-full w-full grid-cols-1 gap-5 md:grid-cols-2">
          <div class="bg-gray-100 px-2">
            <div class="border-b-2 border-gray-300 py-4 text-center">
              <h4 class="text-lg font-bold capitalize">Carrières</h4>
            </div>

            <div class="flex justify-center md:h-full md:items-center">
              <span class="capitalize">à très bientot</span>
            </div>
          </div>

          <div class="bg-gray-100 px-2">
            <div class="border-b-2 border-gray-300 py-4 text-center">
              <h4 class="text-lg font-bold capitalize">Nos contacts</h4>
            </div>

            <div class="flex flex-col justify-center gap-3 px-4 md:h-full">
              <div class="flex flex-col gap-2">
                <p>Email :</p>
                <a class="text-gray-600" href="mailto:hello@inputstudio.co">hello@inputstudio.co</a>
              </div>

              <div class="flex flex-col gap-2">
                <p>Contact :</p>
                <a class="text-gray-600" href="tel:+2250769561650">+225 07 69 56 16 50</a>
              </div>

              <div class="flex flex-col gap-2">
                <p>Nous suivre :</p>

                <div class="flex gap-4">
                  <button type="button" @click="openCalendly">
                    <img src="@/assets/img/calendly.svg" alt="Logo Calendly" width="42" />
                  </button>

                  <a href="https://github.com/inputstudio/" target="_blank" rel="noopener noreferrer">
                    <IconCSS name="mdi:github" size="42px" class="text-neutral-600 transition-colors" />
                  </a>

                  <a href="https://www.linkedin.com/company/inputstudio/" target="_blank" rel="noopener noreferrer">
                    <IconCSS name="mdi:linkedin" size="42px" class="text-neutral-600 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck 230
const calendly = useCalendly();
const openCalendly = () => {
  calendly.showPopupWidget('https://calendly.com/input_studio/30min');
};

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
