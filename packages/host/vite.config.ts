import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "router-host",
      filename: "remoteEntry.js",
      remotes: {
        "remote": {
          external: "http://localhost:8081/assets/remoteEntry.js",
          format: 'var',
          from: 'vite'
        },
      },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    assetsInlineLimit: 40960,
    target: 'esnext',
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'system',
        minifyInternalExports: false
      }
    }
  }
})
