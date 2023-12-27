import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import createAutoImport from './auto-import'
import createComponents from './components'

export default function createVitePlugins () {
  const plugins: Plugin[] = [
    vue(),
    createAutoImport(),
    createComponents(),
  ]
  return plugins
}