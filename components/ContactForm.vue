<template>
  <section class="flex flex-col gap-9 rounded-md bg-gray-100 p-6 md:w-3/5">
    <div class="flex flex-col gap-3">
      <h1 class="text-4xl font-bold uppercase">Nous contacter</h1>
      <p>Remplissez ce formulaire et nous vous contacterons au plus vite pour discuter de votre projet.</p>
    </div>

    <form id="contact-form" class="flex flex-col gap-3" @submit.prevent="submitForm">
      <input type="text" placeholder="Votre nom" :v-model="data.fullname" required />

      <div class="flex gap-3">
        <input class="w-1/2" type="text" placeholder="E-mail/Téléphone" :v-model="data.contact" required />

        <select class="w-1/2" :v-model="data.budget">
          <option value="" selected disabled>Votre budget</option>
          <option v-for="budget in budgets" :key="budget" :value="budget">{{ budget }}</option>
        </select>
      </div>

      <textarea rows="8" :v-model="data.resume" placeholder="Parlez-nous de votre projet"></textarea>

      <div class="mt-3">
        <p>Selectionnez vos besoins :</p>

        <div class="my-3 flex flex-wrap gap-2">
          <p
            v-for="topic in topics"
            :key="topic"
            class="cursor-pointer rounded-full border border-black px-4 py-1 transition-colors hover:bg-black hover:text-white"
            :class="{ 'bg-black text-white': data.topics.indexOf(topic) >= 0 }"
            @click="handleTopics(topic)"
          >
            {{ topic }}
          </p>
        </div>
      </div>

      <button
        type="submit"
        class="mt-3 rounded-lg border-2 bg-black py-4 text-center font-semibold capitalize text-white transition-colors hover:border-black hover:bg-white hover:text-black"
      >
        Envoyer
      </button>
    </form>
  </section>
</template>

<script lang="ts" setup>
const data = ref({
  fullname: '',
  contact: '',
  budget: '',
  resume: '',
  topics: [] as string[],
});

const budgets = [
  'Moins de 1.000.000 FCFA',
  '1.000.000 - 5.000.000 FCFA',
  '5.000.000 - 10.000.000 FCFA',
  'Plus de 10.000.000 FCFA',
];

const topics = [
  'Site vitrine',
  'E-commerce',
  'Site web sur mesure',
  'Refonte de site web',
  'Application mobile',
  'Design UI/UX',
  'Cloud',
  'Autres',
];

function handleTopics(topic: string) {
  const index = data.value.topics.indexOf(topic);

  if (index === -1) {
    data.value.topics.push(topic);
  } else {
    data.value.topics.splice(index, 1);
  }
}

async function submitForm() {}
</script>

<style lang="scss">
#contact-form {
  input,
  select,
  textarea {
    border-radius: 0.375rem;
    padding: 12px 10px;
    background-color: white;
    color: gray;
    width: 100%;
    resize: none;
  }
}
</style>
