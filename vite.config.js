import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  esbuild: {
    jsxFactory: "createVNode",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
