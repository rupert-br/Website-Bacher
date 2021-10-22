import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/style.scss'
import 'bootstrap'

createApp(App).use(store).use(router).mount('#app')