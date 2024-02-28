import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  // base: "/pwa/",
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
      // output: { assetFileNames: "pwa/assets/[name]-[hash][extname]" },
    },
  },
  preview: {
    port: 4173,
    // port: 80,
    strictPort: true,
  },
  server: {
    proxy: {
      "/main": {
        target: "http://fi01.abc.tvz",
        changeOrigin: true,
        secure: false,
      },
      "/vue-global-filter": {
        target: "http://fi01.abc.tvz",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "~", replacement: resolve(__dirname, "src/shared/assets") },
    ],
  },
});
