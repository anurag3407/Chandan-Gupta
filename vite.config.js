import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Configure chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Optimize bundle
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion']
        }
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  },
  // Configure server
  server: {
    port: 5173,
    open: false
  },
  // Configure preview
  preview: {
    port: 4173,
    open: false
  }
})
