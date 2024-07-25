import { createApp } from 'vue'
import { createPinia } from 'pinia';

import '@/assets/styles/main.scss'

import App from './App.vue'

import router from './router/router.js';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

app.mount('#app');
