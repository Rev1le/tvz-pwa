import { Workbox } from 'workbox-window';

const serviceWorkerUrl = new URL('/service-worker.js', import.meta.url);

export const wb = new Workbox(serviceWorkerUrl.href);
