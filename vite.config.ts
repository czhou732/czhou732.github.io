import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { outDir: "dist" },
  // Stamped at build so the footer date cannot go stale by hand.
  define: {
    __BUILD_MONTH__: JSON.stringify(
      new Date().toLocaleString("en-US", { month: "long", year: "numeric" }),
    ),
  },
});
