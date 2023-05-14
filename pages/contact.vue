<template>
  <div>
    <AppBackButton />

    <main class="flex h-screen flex-col justify-center gap-6 px-9 py-16 md:flex-row md:p-24">
      <ContactForm />

      <section class="flex flex-col">
        <h1 id="totb" class="relative mb-10 text-6xl uppercase md:text-8xl">THINK OUTSIDE THE BOX</h1>

        <div class="grid h-full w-full grid-cols-1 gap-5 md:grid-cols-2">
          <div class="rounded-md bg-gray-100 px-2">
            <div class="py-9 text-center">
              <h4 class="text-xl font-bold">Carrières</h4>
            </div>

            <div class="flex flex-col p-3 md:h-full md:items-center">
              <span>À très bientot</span>
            </div>
          </div>

          <div class="rounded-md bg-gray-100 px-2">
            <div class="py-9 text-center">
              <h4 class="text-xl font-bold">Nos contacts</h4>
            </div>

            <div class="flex flex-col gap-3 p-3 md:h-full">
              <p class="">
                Vous détestez les formulaires ? <br />
                Envoyez-nous un mail à
                <a class="text-gray-600" href="mailto:hello@inputstudio.co">hello@inputstudio.co</a>
              </p>
              <p>Ou appelez-nous au : <a class="text-gray-600" href="tel:+2250769561650">+225 07 69 56 16 50</a></p>

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
const calendly = useCalendly();
const openCalendly = () => {
  calendly.showPopupWidget('https://calendly.com/input_studio/30min');
};

useHead({
  title: 'Nous contacter — Input Studio',
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

#totb {
  @media screen and (max-width: 768px) {
    margin-bottom: 20%;
  }

  &::after {
    content: 'Agence 100% remote';
    position: absolute;
    text-transform: uppercase;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 5px 20px;
    text-align: center;

    @media screen and (max-width: 768px) {
      width: 100%;
      bottom: -20%;
      right: 0;
    }

    @media screen and (min-width: 768px) {
      bottom: 12%;
      right: 20%;
    }
  }
}
</style>
