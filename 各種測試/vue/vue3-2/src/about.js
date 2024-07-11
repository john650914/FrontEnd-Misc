import { createApp } from 'vue'
import { createPinia } from 'pinia'
import About from './About.vue'

const about = createApp(About)
about.use(createPinia())
about.mount('#about')
