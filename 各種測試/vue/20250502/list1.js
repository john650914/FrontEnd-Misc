import { useMainStore } from './store.js';
const List1 = {
  template: `
      <h2>列表：</h2>
      <ul>
        <li v-for="item in mainStore.list1" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
  `,
  setup() {
    const mainStore = useMainStore();
    
    mainStore.fetchPosts();
    /* Vue.onMounted(() => {
      mainStore.fetchPosts();
    }); */

    return { mainStore };
  },
};
export default List1;