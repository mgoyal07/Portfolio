// client/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This alias assumes 'shared' is at the same level as 'client'
      "@shared": path.resolve(__dirname, "../shared"),
      // This alias maps '@' to the 'src' folder inside 'client'
      "@": path.resolve(__dirname, "src"),
    },
  },
  // The root is automatically the 'client' folder because this config is inside it.
  // We don't need to specify it.
  build: {
    // Build directly into a 'dist' folder inside 'client'
    outDir: "dist",
    emptyOutDir: true,
  },
});
