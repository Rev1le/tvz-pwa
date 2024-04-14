import { resolve } from 'path';
import { defineConfig, loadEnv  } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';
import basicSsl from '@vitejs/plugin-basic-ssl'

const env = loadEnv('all', process.cwd());

const PROXY_URL = env.VITE_PROXY_URL ?? 'http://fi01.abc.tvz';

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    basicSsl({
      name: 'localhost',
      domains: ['192.168.0.229'],
      certDir: './cert'
    })
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        'service-worker': './service-worker.js',
      },
      output: {
        format: 'es',
        entryFileNames: '[name].js'
      }
    },
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  server: {
    https: true,
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
