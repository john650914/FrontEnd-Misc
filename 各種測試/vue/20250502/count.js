import { useMainStore } from './store.js';
const Count = {
  template: `
    <div>
      <h2>組件內的 local count：{{ localCount }}</h2>
      <button @click="localCount++">加 local count</button>

      <h2>Pinia 的 global count：{{ mainStore.count }}</h2>
      <button @click="mainStore.increment()">加 global count</button>

      <h2>相乘結果：{{ localCount * mainStore.count }}</h2>
    </div>
  `,
  setup() {    
    const localCount = ref(0);
    const mainStore = useMainStore();

    return { localCount, mainStore };
  },
};
export default Count;