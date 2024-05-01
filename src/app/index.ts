import { Logger } from "@/shared/lib/logger";
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './providers/router';
import App from "./App.vue";
import { dbPromise } from './providers/db';
import { useAppStore } from './providers/store'
import { axiosInstance } from '../shared/api';
import type { Workbox } from "workbox-window";

const isDevMode = import.meta.env.MODE === 'development';
const vueApp = createApp(App);

vueApp.use(createPinia());
vueApp.use(router);

let _wb = {};

/**
 * Регистрация `Workbox`
 * @param {Workbox} wb
 */
const registerWorkbox = (wb: Workbox) => {
  wb.register()
  .then((_sw: any) => {
    Object.assign(_wb, wb);
    Logger.info('Успешная регистрация ServiceWorker');
  })
  .catch(e =>
    Logger.error(`Не удалось зарегестрировать ServiceWorker с ошибкой ${e}`)
  );
};

// Регестрируем `serviceWorker` и устанавливаем объектов во Vue приложение
if ('serviceWorker' in navigator && !isDevMode) {
  import('./providers/service-worker').then(({wb}) => registerWorkbox(wb));
}

vueApp.provide('appStore', useAppStore);
vueApp.provide('axios', axiosInstance);
vueApp.provide('dbPromise', dbPromise);
vueApp.provide('workbox', _wb);

export default vueApp;
