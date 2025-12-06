import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' config is crucial for GitHub Pages deployment.
  // If you deploy to https://<USERNAME>.github.io/<REPO>/, set base to '/<REPO>/'.
  // If you deploy to https://<USERNAME>.github.io/, set base to '/'.
  // Using './' handles most relative path cases automatically.
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})