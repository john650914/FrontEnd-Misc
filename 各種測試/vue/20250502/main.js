//import { useMainStore } from './store.js';
import Count from './count.js';
import List1 from './list1.js';
const { createApp } = Vue;

const app = createApp({
    template: `
    <div>
        <h1>測試用網頁</h1>
        <count-component></count-component>
        <!--<div>{{mainStore.count}}</div>-->
        <hr>
        <list1-component></list1-component>
    </div>
    `,
    components: {
        'count-component': Count,
        'list1-component': List1
    },
    /* setup() {
        const mainStore = useMainStore();
        return { mainStore };
    } */
});

const pinia = createPinia();
app.use(pinia);
app.mount('#app');