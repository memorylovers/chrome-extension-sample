import { crx } from "@crxjs/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { manifest } from "./manifest.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx({ manifest })],
});
