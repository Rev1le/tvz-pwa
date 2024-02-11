import { defineConfig } from 'vite'

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
