import { crx } from "@crxjs/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { manifest } from "./manifest.config";

// https://ja.vitejs.dev/guide/env-and-mode.html#modes
// mode = "development" | "production"
export default ({ mode }) => {
  const isProd = mode === "production";
  return defineConfig({
    plugins: [vue(), crx({ manifest })],
    build: {
      // 開発時はminifyしない
      minify: isProd,
    },
    esbuild: {
      // 本番時はconsoleを削除する
      drop: isProd ? ["console"] : undefined,
    },
  });
};
