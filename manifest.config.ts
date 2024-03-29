import { defineManifest } from "@crxjs/vite-plugin";
import pkg from "./package.json";

export const manifest = defineManifest(async (env) => ({
  manifest_version: 3,
  name: env.mode == "production" ? pkg.name : `【DEV】 ${pkg.name}`,
  description: pkg.description,
  version: pkg.version,
  icons: {
    "16": "icons/icon_16.png",
    "32": "icons/icon_32.png",
    "48": "icons/icon_48.png",
    "128": "icons/icon_128.png",
  },
  permissions: ["tabs"],
  action: {
    default_popup: "index.html",
  },
  background: {
    service_worker: "src/background",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/scripts/addOutline", "src/scripts/addDummyView"],
    },
  ],
}));
