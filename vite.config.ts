import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';
import { defineConfig, loadEnv  } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv('all', process.cwd());
const PROXY_URL = env.VITE_PROXY_URL ?? 'http://fi01.abc.tvz';

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    basicSsl({
      name: 'localhost',
      domains: [],
      certDir: './cert'
    })
  ],
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        'service-worker': resolve(__dirname, "service-worker.js")
      },
      output: {
        format: 'es',
        entryFileNames: '[name].js'
      }
    },
    assetsInlineLimit: 0
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  server: {
    proxy: {
      "/main": {
        target: PROXY_URL,
        changeOrigin: true,
        secure: false,
      },
      "/vue-global-filter": {
        target: PROXY_URL,
        changeOrigin: true,
        secure: false,
      },
      "/support": {
        target: PROXY_URL,
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
