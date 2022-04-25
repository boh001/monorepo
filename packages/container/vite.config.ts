import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        "landing": {
          external: "http://localhost:8081/assets/remoteEntry.js",
          from: 'vite'
        },
        "myAccount": {
          external: "http://localhost:8082/assets/remoteEntry.js",
          from: 'vite'
        },
        "registration": {
          external: "http://localhost:8083/assets/remoteEntry.js",
          from: 'vite'
        },
      },
      shared: {
        "react": {
          version: "^18.0.0"
        },
        "react-dom": {
          version: "^18.0.0"
        },
        "react-router-dom": {
          version: "^6.3.0"
        },
        "@mui/material": {
          version: "^5.6.2"
        },
      }
    })
  ],
  build: {
    target: "esnext",
  }
})
