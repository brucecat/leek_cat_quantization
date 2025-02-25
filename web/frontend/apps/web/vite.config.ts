import { resolve } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  // https://v2.vitejs.dev/config/#server-watch
  server: {
    watch: {
      ignored: ['!**/node_modules/@repo/**']
    }
  },
  // The watched package must be excluded from optimization,
  // so that it can appear in the dependency graph and trigger hot reload.
  optimizeDeps: {
    exclude: ['@repo']
  },
  resolve: {
    alias: {
      "@repo/ui/styles.css": resolve(__dirname, "../../packages/ui/src/index.css"),
      "@repo/ui": resolve(__dirname, "../../packages/ui/src/index.ts")
    }
  }
})