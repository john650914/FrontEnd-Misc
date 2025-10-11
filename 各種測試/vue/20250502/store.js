export const useMainStore = defineStore('mainStore', {
  state: () => ({
    count: 0,
    list1: []
  }),
  actions: {
    increment() {
      this.count++;
    },
    async fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        this.list1 = data.slice(0, 5);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
      }
    }
  },
});