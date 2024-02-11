import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        'service-worker': './service-worker.js',
      },
      output: {
        format: 'es',
        entryFileNames: '[name].js',
      },
    },
  },
})
