export default function (animation: (...args: any[]) => unknown, initializeTwice = false) {
  const { hook } = useNuxtApp();
  const initialized = ref(false);

  const initialize = () => {
    if (!initializeTwice && initialized.value) return;

    animation();

    initialized.value = true;
  };

  hook('page:finish', initialize);
  hook('page:transition:finish', initialize);

  return { initialized, initialize };
}
