const { Workbox } = await import('workbox-window');

export const wb = new Workbox('/service-worker.js');
