import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Listen on all addresses, including localhost
    port: 5173, // Set the port to 5173
  },
  plugins: [react()],
})
