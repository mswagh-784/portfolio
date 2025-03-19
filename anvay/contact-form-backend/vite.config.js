import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['7524-2409-40c2-1159-90da-ad9a-3c96-5f8d-dc0d.ngrok-free.app'],
  },
})
