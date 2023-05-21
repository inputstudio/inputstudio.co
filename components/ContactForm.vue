<template>
  <section class="flex flex-col gap-9 rounded-md bg-gray-100 p-6 md:w-3/5">
    <div class="flex flex-col gap-3">
      <h1 class="text-4xl font-bold uppercase">Nous contacter</h1>
      <p>Remplissez ce formulaire et nous vous contacterons au plus vite pour discuter de votre projet.</p>
    </div>

    <form id="contact-form" class="flex flex-col gap-3" @submit.prevent="submit">
      <input v-model="data.fullname" type="text" placeholder="Votre nom" required />

      <div class="flex gap-3">
        <input v-model="data.contact" class="w-1/2" type="text" placeholder="E-mail/Téléphone" required />

        <select v-model="data.budget" class="w-1/2">
          <option value="" selected disabled>Votre budget</option>
          <option v-for="budget in budgets" :key="budget" :value="budget">{{ budget }}</option>
        </select>
      </div>

      <textarea v-model="data.resume" rows="8" placeholder="Parlez-nous de votre projet"></textarea>

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
        class="mt-3 flex justify-center gap-3 rounded-lg border-2 bg-black py-4 text-center font-semibold text-white transition-colors hover:border-black hover:bg-white disabled:cursor-not-allowed disabled:border-black disabled:bg-white disabled:text-black"
        :disabled="loading"
      >
        <div
          v-if="loading"
          class="h-6 w-6 animate-spin rounded-full border-4 border-solid border-black border-t-transparent"
        ></div>
        <span>Envoyer</span>
      </button>
    </form>
  </section>
</template>

<script lang="ts" setup>
const loading = ref(false);

const data = ref({
  fullname: '',
  contact: '',
  budget: '',
  resume: '',
  topics: [] as string[],
});

const budgets = ['1.000.000 - 5.000.000 FCFA', '5.000.000 - 10.000.000 FCFA', 'Plus de 10.000.000 FCFA'];

const topics = [
  'Site vitrine',
  'E-commerce',
  'Blog',
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

async function submit() {
  loading.value = false;

  const { contactFormEndpoint } = useRuntimeConfig().public;

  try {
    await fetch(contactFormEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.value),
    });
  } catch (error) {
    // TODO: Display error snackbar
  }

  // TODO: Display success snackbar

  loading.value = true;
}
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
