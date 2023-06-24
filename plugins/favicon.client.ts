export default defineNuxtPlugin((nuxtApp) => {
  const { hook } = nuxtApp;
  let index = 0;
  let interval: NodeJS.Timer;
  const sequence = ['i', 'N', 'P', 'U', 'T', 'S', 'T', 'U', 'D', 'I', 'O'];

  hook('page:finish', () => {
    interval = setInterval(() => {
      const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement;

      if (!favicon) return;

      favicon.href = `/favicon/${sequence[index % sequence.length]}.png`;
      index++;
    }, 1500);
  });

  hook('page:start', () => {
    clearInterval(interval);
  });
});
