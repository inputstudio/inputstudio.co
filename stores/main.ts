export const useStore = defineStore('main', {
  state: () => ({
    projects: [] as Project[],
    jobs: [] as Job[],
  }),
  actions: {
    async fetchContent() {
      // Jobs can be empty so we only need to check projects here to avoid unnecessary requests
      if (this.projects.length) return;

      await this.fetchProjects();
      await this.fetchJobs();
    },
    async fetchProjects() {
      const { getItems } = useDirectusItems();
      const { staticAssetsEndpoint } = useRuntimeConfig().public;
      const { data } = await useLazyAsyncData('projects', () =>
        getItems<Project>({
          collection: 'projects',
          params: {
            fields: ['*', 'translations.*'],
          },
        })
      );
      this.projects =
        data.value?.map((project) => {
          project.cover = new URL(project.cover, staticAssetsEndpoint).toString();
          return project;
        }) ?? [];
    },
    async fetchJobs() {
      const { getItems } = useDirectusItems();
      const { data } = await useLazyAsyncData('jobs', () =>
        getItems<Job>({
          collection: 'careers',
          params: {
            fields: ['*', 'translations.*'],
          },
        })
      );
      this.jobs = data.value ?? [];
    },
  },
});
