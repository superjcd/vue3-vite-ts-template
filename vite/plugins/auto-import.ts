import autoImport from 'unplugin-auto-import/vite'
import { Plugin } from 'vite'


export default function createAutoImport(): Plugin {
    return autoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      dts: './src/types/auto-imports.d.ts',
      dirs: [
        './src/utils/composables/**',
      ],
    })
  }
  