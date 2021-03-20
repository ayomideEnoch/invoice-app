import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import router from './router/index'
import store from './store/index'
import vue3notification from 'notification_vue_3'


const app = createApp(App);
app.use(router);
app.use(store);
app.use(vue3notification);
app.mount('#app')