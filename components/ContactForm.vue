<template>
  <div class="flex flex-col gap-3 rounded-xl bg-black/40 p-6 lg:max-w-xl">
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl font-bold uppercase lg:text-4xl">Nous contacter</h2>
      <p>Remplissez ce formulaire et nous vous contacterons au plus vite pour discuter de votre projet.</p>
    </div>

    <form id="contact-form" class="flex flex-col gap-3" @submit.prevent="submit">
      <input v-model="data.fullname" type="text" placeholder="Votre nom" required />

      <div class="flex flex-col gap-3 lg:flex-row">
        <input v-model="data.contact" class="w-1/2" type="text" placeholder="E-mail/Téléphone" required />

        <select v-model="data.budget" class="w-1/2" required>
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
            class="cursor-expander rounded-full border border-white bg-black px-4 py-1 text-sm transition-colors lg:text-base"
            :class="{ 'bg-white text-black': data.topics.indexOf(topic) >= 0 }"
            @click="handleTopics(topic)"
          >
            {{ topic }}
          </p>
        </div>
      </div>

      <button
        type="submit"
        class="mt-3 flex justify-center gap-3 rounded-lg bg-black py-4 text-center uppercase transition-colors hover:border-black hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:border-black disabled:bg-white disabled:text-black"
        :disabled="loading"
      >
        <div
          v-if="loading"
          class="h-6 w-6 animate-spin rounded-full border-4 border-solid border-black border-t-transparent"
        ></div>
        <span>Envoyer</span>
      </button>
    </form>
  </div>
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
  'Design UI/UX',
  'Site vitrine',
  'E-commerce',
  'Blog',
  'Refonte site web',
  'Application mobile',
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
  loading.value = true;

  const { contactFormEndpoint } = useRuntimeConfig().public;

  try {
    await useFetch(contactFormEndpoint, {
      method: 'POST',
      body: data.value,
    });
  } catch (error) {
    // TODO: Display error snackbar
  }

  // TODO: Display success snackbar
  // TODO: Clear form with @inputstudio/utils

  loading.value = false;
}
</script>

<style lang="scss">
#contact-form {
  input,
  select,
  textarea {
    padding: 0.75rem 1.5rem;
    color: #ffffff;
    width: 100%;
    background: rgba($color: #000, $alpha: 0.4);
    border-radius: 0.75rem;
    resize: none;
  }

  select {
    background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
      no-repeat 95% 50%;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
}
</style>
