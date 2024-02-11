import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      }
    },
  },
  resolve: {
    alias: [
        { find: '@', replacement: resolve(__dirname, 'src') },
        { find: '~', replacement: resolve(__dirname, 'src/shared/assets') },
    ],
  },
})
