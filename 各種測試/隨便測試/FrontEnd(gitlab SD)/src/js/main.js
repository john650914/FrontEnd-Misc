import { createApp } from 'vue'
import '../assets/css/style3.css'
import { createPinia } from 'pinia'
import App from './App3.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')