import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from  './vite/plugins'

export default ({ mode, command }:{
  mode:string 
  command:string
}) => {
  const env = loadEnv(mode, process.cwd())
  const conf = defineConfig({
    base: './',
    server: {
      open: true,
      port: 3000
    },
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': path.resolve(__dirname, 'src/types')
      }
    }
  })

  return conf
}
