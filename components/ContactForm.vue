<template>
  <div class="flex flex-col gap-3 rounded-xl bg-black/40 p-6 lg:max-w-xl">
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl font-bold uppercase lg:text-4xl">{{ $t('contact.form-title') }}</h2>
      <p>{{ $t('contact.form-subtitle') }}</p>
    </div>

    <form id="contact-form" class="flex flex-col gap-3" @submit.prevent="submit">
      <input v-model="data.fullname" type="text" :placeholder="$t('contact.form-name')" required />

      <div class="flex flex-col gap-3 lg:flex-row">
        <input v-model="data.contact" class="w-1/2" type="text" :placeholder="$t('contact.form-contact')" required />

        <select v-model="data.budget" class="w-1/2" required>
          <option value="" selected disabled>{{ $t('contact.form-budget') }}</option>
          <option v-for="budget in budgets" :key="budget" :value="budget">{{ budget }}</option>
        </select>
      </div>

      <textarea v-model="data.resume" rows="8" :placeholder="$t('contact.form-message')" />

      <div class="mt-3">
        <p>{{ $t('contact.form-topics') }}</p>

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
        />
        <span>{{ $t('contact.form-submit') }}</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const snackbar = useSnackbar();
const loading = ref(false);

const data = ref({
  fullname: '',
  contact: '',
  budget: '',
  resume: '',
  topics: [] as string[],
});

const budgets = ['1.000.000 - 5.000.000 FCFA', '5.000.000 - 10.000.000 FCFA', '+ 10.000.000 FCFA'];

const topics = [
  t('contact.form-topic-design'),
  t('contact.form-topic-website'),
  t('contact.form-topic-ecommerce'),
  t('contact.form-topic-blog'),
  t('contact.form-topic-redesign'),
  t('contact.form-topic-mobile'),
  t('contact.form-topic-cloud'),
  t('contact.form-topic-other'),
];

function handleTopics(topic: string) {
  const index = data.value.topics.indexOf(topic);

  if (index === -1) {
    data.value.topics.push(topic);
  } else {
    data.value.topics.splice(index, 1);
  }
}

function clearForm() {
  data.value = {
    fullname: '',
    contact: '',
    budget: '',
    resume: '',
    topics: [],
  };
}

async function submit() {
  loading.value = true;

  const { error } = await useFetch('/api/contact', {
    method: 'POST',
    body: data.value,
  });

  if (!error.value) {
    clearForm();
    snackbar.add({
      type: 'success',
      text: t('contact.form-success'),
    });
  } else {
    snackbar.add({
      type: 'error',
      text: error,
    });
  }

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
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
}
</style>
