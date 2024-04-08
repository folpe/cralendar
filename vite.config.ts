import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['src'], exclude: ['src/stories'] })],
  build: {
    rollupOptions: {
      input: ['/src/index.ts'],
      external: ['react', 'react/jsx-runtime'],
    },
  },
})
