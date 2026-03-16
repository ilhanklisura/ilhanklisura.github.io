import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Markdown from 'unplugin-vue-markdown/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // allow vue to process markdown
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    Markdown({
      wrapperClasses: 'markdown-body',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  base: './', // important for GitHub Pages deployment
})
