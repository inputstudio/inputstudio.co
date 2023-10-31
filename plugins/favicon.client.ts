export default defineNuxtPlugin((nuxtApp) => {
  const { hook } = nuxtApp;
  let index = 0;
  let interval: NodeJS.Timer | undefined;
  const sequence = ['_i', 'N', 'P', 'U', 'T', 'S', 'T', 'U', 'D', 'I', 'O'];

  hook('page:finish', () => {
    if (interval) return;

    interval = setInterval(() => {
      const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement;

      if (!favicon) return;

      favicon.href = `/favicon/${sequence[index % sequence.length]}.ico`;
      index++;
    }, 1500);
  });

  hook('page:start', () => {
    clearInterval(interval);
    interval = undefined;
  });
});
