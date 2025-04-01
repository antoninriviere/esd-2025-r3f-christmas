import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true, // allow the server to be accessed from other devices on the network
    open: true, // open the browser automatically
  },
  plugins: [react()],
})
