import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  //base: './',
  base: 'https://tw.hicdn.beanfun.com/OA/rwar/',
  plugins: [
    vue(),
    viteImagemin({
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
    }),
  ],
  server: {
    open: './index3.html'
  },
  build: {
    outDir: 'dist2',
    rollupOptions: {
      input: {
        //main: resolve(__dirname, 'index3.html'),
        main: './src/js/main3.js'
      },
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop()
          if (!ext) {
            return 'assets/[name]-[hash].[ext]'
          }
          if (['css'].includes(ext)) {
            return 'assets/[name]-[hash].[ext]'
          } else if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) {
            return 'assets/img/[name]-[hash].[ext]'
          } else {
            return 'assets/[name]-[hash].[ext]'
          }
        },
        manualChunks(id) {
          if (id.includes('index3.html')) {
            return 'index3.html';
          }
        }
      }
    }
  }
})
