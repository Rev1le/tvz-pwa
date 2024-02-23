import { createApp, provide } from 'vue'
import { createPinia } from 'pinia'
import { router } from './providers/router';
import { axiosInstance } from '../shared/api';
import App from "./App.vue"

const isDevMode = import.meta.env.MODE === 'development';
const vueApp = createApp(App);

vueApp.use(createPinia());
vueApp.use(router);

// Регестрируем `serviceWorker` и устанавливаем объектов во Vue приложение
if ('serviceWorker' in navigator && !isDevMode) {
  import('./providers/service-worker').then(({ wb }) => {
    wb.register().then(
      (sw: any) => {
        provide('serviceWorkerRegistration', sw);
        provide('workbox', wb);
        // vueApp.config.globalProperties.$serviceWorkerRegistration = sw
        // vueApp.config.globalProperties.$workbox = wb
      }
    );
  });
}

vueApp.config.globalProperties.$axios = axiosInstance;

export default vueApp;
