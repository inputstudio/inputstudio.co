<template>
  <div class="flex flex-col gap-3 rounded-xl bg-black/40 p-6 lg:max-w-screen-xl">
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

      <textarea v-model="data.resume" rows="6" :placeholder="$t('contact.form-message')" />

      <button
        type="submit"
        class="flex justify-center gap-3 rounded-lg bg-black py-4 text-center uppercase transition-colors hover:border-black hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:border-black disabled:bg-white disabled:text-black"
        :disabled="loading || success"
      >
        <div
          v-if="loading"
          class="h-6 w-6 animate-spin rounded-full border-4 border-solid border-black border-t-transparent"
        />
        <span>{{ success ? t('contact.form-success') : $t('contact.form-submit') }}</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const success = ref(false);
const loading = ref(false);

const data = ref({
  fullname: '',
  contact: '',
  budget: '',
  resume: '',
});

const budgets = ['1.000.000 - 5.000.000 FCFA', '5.000.000 - 10.000.000 FCFA', '+ 10.000.000 FCFA'];

async function submit() {
  loading.value = true;

  const { error } = await useFetch('/api/contact', {
    method: 'POST',
    body: data.value,
  });

  if (!error.value) {
    success.value = true;
    data.value = {
      fullname: '',
      contact: '',
      budget: '',
      resume: '',
    };

    setTimeout(() => {
      success.value = false;
    }, 3000);
  } else {
    alert(error.value);
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
