import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router-provider';
// import { httpApi } from '../shared/api';
import App from "./App.vue"

const isDevMode = import.meta.env.MODE === 'development';
const vueApp = createApp(App);

vueApp.use(createPinia());
vueApp.use(router);

// Регестрируем `serviceWorker` и устанавливаем объектов во Vue приложение
if ('serviceWorker' in navigator && !isDevMode) {
  const { wb } = require('./service-worker-provider');

  wb.register().then(
    (sw: any) => {
      vueApp.config.globalProperties.$serviceWorkerRegistration = sw
      vueApp.config.globalProperties.$workbox = wb
    }
  );
}

export default vueApp;
