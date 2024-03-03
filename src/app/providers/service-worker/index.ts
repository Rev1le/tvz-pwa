import { Workbox } from 'workbox-window';

// @todo разобраться с ссылкой на файл
// const serviceWorkerUrl = new URL('/service-worker.js', import.meta.url);
// console.log(serviceWorkerUrl);
export const wb = new Workbox("/service-worker.js");
