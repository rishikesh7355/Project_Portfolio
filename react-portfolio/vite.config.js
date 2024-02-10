import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      //allows to have multiple css files with same clasNames
      localsConvention: "camelCase",
    }
  }
})
