import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [preact()], 
      define: {
        "process.env.NODE_ENV": '"production"',
      },      
      build: {
        lib: {
          entry: [
            './src/main.tsx',
          ],
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [preact()]
    }
  }
})