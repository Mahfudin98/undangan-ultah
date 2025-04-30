import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
AOS.init({
  once: true, // animasi hanya jalan sekali
  duration: 800, // durasi animasi
  easing: 'ease-out'
})

app.mount('#app')
