import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css'
import './assets/styles/main.css'
import router from './router'

createApp(App).use(router).mount('#app')
