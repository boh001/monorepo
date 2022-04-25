import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "registration",
      filename: "remoteEntry.js",
      exposes: {
        './SignIn': './src/page/SignIn.tsx',
        './SignUp': './src/page/SignUp.tsx',
      },
      shared: ["react", "react-dom", "react-router-dom", "@mui/material"]
    })
  ],
  build: {
    target: "esnext",
  }
})
