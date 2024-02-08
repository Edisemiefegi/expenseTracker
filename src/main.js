import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import './style.css'
import router from './router';
import App from './App.vue'

import 'primeicons/primeicons.css'


createApp(App).use(router).use(Toast).mount('#app')



