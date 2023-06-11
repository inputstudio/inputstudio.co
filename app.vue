<template>
  <main class="flex flex-col items-center justify-between p-9">
    <header>
      <AppLogo />
    </header>

    <div class="absolute right-1/2 top-1/2 flex -translate-y-1/2 translate-x-1/2 flex-col gap-3 text-center">
      <h1 class="text-6xl font-bold">{{ countdown }}</h1>
      <p class="text-xl text-neutral-600">Notre site web est en train de se faire une beauté, restez à l'écoute !</p>
    </div>

    <footer class="flex items-center gap-3">
      <a href="https://instagram.com/input.studio" target="_blank" rel="noopener noreferrer" title="Instagram">
        <IconCSS name="mdi:instagram" size="64px" class="text-neutral-600 transition-colors hover:text-white" />
      </a>

      <a href="https://www.linkedin.com/company/inputstudio" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <IconCSS name="mdi:linkedin" size="64px" class="text-neutral-600 transition-colors hover:text-white" />
      </a>
    </footer>
  </main>
</template>

<script setup lang="ts">
const countdown = ref('');
const releaseDate = new Date('2023-06-30T00:00:00').getTime();

const interval = setInterval(function () {
  const now = new Date().getTime();
  const timeLeft = releaseDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.value = days + 'j ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  if (timeLeft < 0) {
    clearInterval(interval);
    countdown.value = 'Le site sera bientôt en ligne !';
  }
}, 1000);

useHead({
  title: 'Input Studio — Agence de développement web',
  link: [
    {
      rel: 'icon',
      href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22></text></svg>',
    },
  ],
});
</script>
