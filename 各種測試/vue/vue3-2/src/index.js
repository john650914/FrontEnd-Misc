import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Index from './Index.vue'

const index = createApp(Index)
index.use(createPinia())
index.mount('#index')
