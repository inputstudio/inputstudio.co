<template>
  <section class="my-32 flex flex-col items-center gap-6 md:gap-9 xl:gap-12">
    <div class="group relative inline-flex">
      <div
        class="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"
      ></div>
      <span
        class="relative inline-flex items-center justify-center rounded-xl bg-black/85 px-6 py-3 tracking-wide text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        Design & Development Studio
      </span>
    </div>

    <h1
      class="cursor-expander max-w-screen-md text-center text-2xl font-thin leading-relaxed tracking-wide md:text-4xl"
    >
      Plus qu'une <span class="line-through">agence web</span>, un
      <span class="font-bold"> partenaire </span>
      <span class="stroke-me"> créatif </span> pour propulser votre business
    </h1>

    <div class="flex gap-9">
      <NuxtLink to="/studio" class="rounded bg-white/85 px-6 py-3 text-black transition-colors hover:bg-white/95">
        Nos solutions
      </NuxtLink>
      <NuxtLink to="/contact" class="rounded bg-white/25 px-6 py-3 transition-colors hover:bg-white/15">
        Contactez-nous
      </NuxtLink>
    </div>

    <HomeHeroShowcase />
  </section>
</template>

<style scoped>
.stroke-me {
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
}
</style>
