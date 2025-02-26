import { resolve } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
  ],
  server: {
    watch: {
      ignored: ['!**/node_modules/@repo/**']
    },

    // 代理配置，用于重定向请求到其他服务器
    proxy: {
      // 定义一个代理规则，将/api路径下的请求代理到指定的目标服务器
      '/api': {
        // 目标服务器的地址
        target: 'http://127.0.0.1:9001',

        // 更改请求的origin为代理服务器的origin，以便与目标服务器交互
        changeOrigin: true,
        // 重写请求路径，移除/api前缀
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
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
  },
})