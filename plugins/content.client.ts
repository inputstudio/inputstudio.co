export default defineNuxtPlugin(async (_) => {
  const { fetchContent } = useStore();
  await fetchContent();
});
