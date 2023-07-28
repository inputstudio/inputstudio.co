export default function (animation: () => unknown, initializeTwice = false) {
  const { hook } = useNuxtApp();
  const initialized = ref(false);

  const initialize = () => {
    if (!initializeTwice && initialized.value) return;

    animation();

    initialized.value = true;
  };

  hook('page:transition:finish', initialize);

  return { initialized, initialize };
}
