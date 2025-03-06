// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/hzs/Documents/code/quantitative/leek_cat_quantization/web/frontend/node_modules/.pnpm/vite@5.2.7_@types+node@20.11.30/node_modules/vite/dist/node/index.js";
import react from "file:///Users/hzs/Documents/code/quantitative/leek_cat_quantization/web/frontend/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.2.7/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///Users/hzs/Documents/code/quantitative/leek_cat_quantization/web/frontend/node_modules/.pnpm/vite-plugin-dts@3.8.1_@types+node@20.11.30_typescript@5.4.3_vite@5.2.7/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///Users/hzs/Documents/code/quantitative/leek_cat_quantization/web/frontend/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.3_vite@5.2.7/node_modules/vite-tsconfig-paths/dist/index.mjs";
import tailwindcss from "file:///Users/hzs/Documents/code/quantitative/leek_cat_quantization/web/frontend/node_modules/.pnpm/tailwindcss@3.4.3/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_dirname = "/Users/hzs/Documents/code/quantitative/leek_cat_quantization/web/frontend/packages/ui";
var vite_config_default = defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    dts({
      entryRoot: resolve(__vite_injected_original_dirname, "src"),
      insertTypesEntry: true
    })
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "@repo/ui",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss"
        }
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaHpzL0RvY3VtZW50cy9jb2RlL3F1YW50aXRhdGl2ZS9sZWVrX2NhdF9xdWFudGl6YXRpb24vd2ViL2Zyb250ZW5kL3BhY2thZ2VzL3VpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaHpzL0RvY3VtZW50cy9jb2RlL3F1YW50aXRhdGl2ZS9sZWVrX2NhdF9xdWFudGl6YXRpb24vd2ViL2Zyb250ZW5kL3BhY2thZ2VzL3VpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9oenMvRG9jdW1lbnRzL2NvZGUvcXVhbnRpdGF0aXZlL2xlZWtfY2F0X3F1YW50aXphdGlvbi93ZWIvZnJvbnRlbmQvcGFja2FnZXMvdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcInRhaWx3aW5kY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB0c2NvbmZpZ1BhdGhzKCksXG4gICAgcmVhY3QoKSxcbiAgICBkdHMoe1xuICAgICAgZW50cnlSb290OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIG91dERpcjogXCJkaXN0XCIsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJAcmVwby91aVwiLFxuICAgICAgZm9ybWF0czogW1wiZXNcIiwgXCJ1bWRcIl0sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJ0YWlsd2luZGNzc1wiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXG4gICAgICAgICAgdGFpbHdpbmRjc3M6IFwidGFpbHdpbmRjc3NcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW3RhaWx3aW5kY3NzXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWliLFNBQVMsZUFBZTtBQUN6YyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8saUJBQWlCO0FBTHhCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLFdBQVcsUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDbkMsa0JBQWtCO0FBQUEsSUFDcEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxXQUFXLFNBQVMsTUFBTTtBQUFBLElBQ3ZDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxhQUFhLGFBQWE7QUFBQSxNQUM5QyxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFdBQVc7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
