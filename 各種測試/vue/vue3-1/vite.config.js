import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteImagemin from 'vite-plugin-imagemin'


/* const renameIndexPlugin = (newFilename) => {
  if (!newFilename) return

  return {
    name: 'renameIndex',
    enforce: 'post',
    generateBundle(options, bundle) {
      const indexHtml = bundle['index.html']
      indexHtml.fileName = newFilename
    },
  }
} */


// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  //base: 'https://tw.hicdn.beanfun.com/OA/rwar/',
  plugins: [
    vue(),
    viteImagemin({
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
    }),
    //renameIndexPlugin('index.cshtml')
    (() => {
      return {
        name: 'renameIndex',
        enforce: 'post',
        generateBundle(options, bundle) {
          const indexHtml = bundle['index.html']
          indexHtml.fileName = '../index.cshtml'
        },
      }
    })()
  ],
  /* server: {
    open: './index3.html'
  }, */
  build: {
    outDir: './',
    rollupOptions: {
      /* input: {
        //main: resolve(__dirname, 'main.html'),
        main: './src/js/main.js'
      }, */
      input: 'index.html',
      output: {
        entryFileNames: 'js/main-[hash].js',
        //chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop()
          if (!ext) {
            return 'assets/[name]-[hash].[ext]'
          }
          if (['css'].includes(ext)) {
            return 'assets/main-[hash].[ext]'
          } else if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) {
            return 'assets/img/[name]-[hash].[ext]'
          } else {
            return 'assets/[name]-[hash].[ext]'
          }
        },
        /* manualChunks(id) {
          if (id.includes('main.html')) {
            return 'main.html';
          }
        } */
      }
    }
  }
})
