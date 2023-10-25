import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PocketBase from 'pocketbase';

const pb = new PocketBase("http://127.0.0.1:8090");

const app = createApp(App);

app.config.globalProperties.$pb = pb;

app.use(router);

app.mount('#app');
