import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({ tsconfigPath: "./tsconfig.build.json" }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        components: path.resolve(__dirname, "src/components/index.ts"),
        utils: path.resolve(__dirname, "src/utils/index.ts"),
      },
      name: "VueLib",
      formats: ["es"],
      fileName: (_, entryName) => {
        if (entryName === "index") return "index.js";
        return `${entryName}/index.js`;
      },
    },
    rollupOptions: {
      external: ["vue"], // don't bundle Vue
      output: {
        chunkFileNames: "chunk/[name]-[hash].js",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
