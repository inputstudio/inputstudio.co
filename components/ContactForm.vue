<template>
  <section class="rounded-md bg-gray-100 p-4 md:w-3/5">
    <div class="flex flex-col gap-3">
      <h1 class="text-4xl font-bold uppercase">Nous contacter !</h1>
      <p>Discutons de votre projet, ensemble nous trouverons une solution aux tâches les plus difficiles.</p>
    </div>

    <form
      id="contact-form"
      class="my-3 flex flex-col gap-5 border-t-2 border-gray-300 pb-1 pt-6"
      @submit.prevent="submitForm"
    >
      <input type="text" placeholder="Votre nom*" :v-model="formData.nom" required />

      <div class="flex gap-4">
        <input class="w-50" type="text" placeholder="E-mail/Contact*" :v-model="formData.contact" required />

        <select class="w-50" placeholder="Budget*" :v-model="formData.budget">
          <option value="" selected disabled>Budget*</option>
          <option v-for="budget in budgets" :key="budget" :value="budget">{{ budget }}</option>
        </select>
      </div>

      <textarea
        name=""
        cols="30"
        rows="10"
        :v-model="formData.resume"
        placeholder="Un bref résumé de votre projet*"
      ></textarea>

      <div>
        <input id="cahier-charge" type="file" :v-model="formData.cahierCharge" hidden />

        <label for="cahier-charge" class="flex w-full cursor-pointer items-center gap-4">
          <span class="rounded-md bg-white p-2">
            <img
              :src="plus"
              alt="Ajouter le cahier de charge"
              title="Ajouter le cahier de charge"
              width="15"
              height="15"
            />
          </span>
          Ajouter votre cahier de charge
        </label>
      </div>

      <div class="border-t-2 border-gray-300 pt-4">
        <p>Selectionner un sujet de contact</p>

        <div class="my-2 flex flex-wrap gap-2">
          <p
            v-for="topic in topics"
            :key="topic"
            class="cursor-pointer rounded-full border border-black px-4 py-1 transition-colors hover:bg-black hover:text-white"
            :class="{ 'bg-black text-white': selectedTopics.indexOf(topic) >= 0 }"
            @click="handleTopics(topic)"
          >
            {{ topic }}
          </p>
        </div>
      </div>

      <div class="border-t-2 border-gray-300 pt-4">
        <p>En appuyant sur “Envoyer” vous acceptez sur notre politique de confidentialité.</p>

        <button
          type="submit"
          class="mt-4 w-full rounded-lg border-2 bg-black py-4 text-center font-light capitalize text-white transition-colors hover:border-black hover:bg-white hover:text-black"
        >
          Envoyer
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts" setup>
// @ts-nocheck 2307
import plus from '@/assets/img/plus.svg';

const formData = ref({
  nom: '',
  contact: '',
  budget: '',
  resume: '',
  cahierCharge: null,
  sujet: [],
});

const budgets = [
  'Moins de 800 000 FCFA',
  '800 000 - 1 500 000 FCFA',
  '1 500 000 - 2 500 000 FCFA',
  'plus de 2 500 000 FCFA',
];

const topics = [
  'Site vitrine',
  'E-commerce',
  'Application mobile',
  'Cloud',
  'Refonte site web',
  'Sur mesure',
  'Design UI/UX',
  'Autres',
];

const selectedTopics = ref([]);

function handleTopics(topic) {
  const index = selectedTopics.value.indexOf(topic);

  if (index === -1) {
    selectedTopics.value.push(topic);
  } else {
    selectedTopics.value.splice(index, 1);
  }
}

async function submitForm() {}
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
