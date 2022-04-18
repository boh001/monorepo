import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/App.tsx'
      },
      shared: {
        "react": {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        }
      }
    })
  ],
  build: {
    target: "esnext"
  }
})
