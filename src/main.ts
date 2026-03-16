import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import router from './router'

import './assets/style.css'
import 'primeicons/primeicons.css'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: 'none' // We rely completely on TailwindCSS for styling
})

app.mount('#app')
