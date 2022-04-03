import * as path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { VitePWA as pwa, VitePWAOptions } from "vite-plugin-pwa";

const manifest = {
  name: "SuperEDT",
  short_name: "SuperEDT",
  description: "UPSSITECH's supercharged student time-table",
  icons: [
    {
      src: "/icons/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/icons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
  theme_color: "#4c956c",
  background_color: "#4c956c",
  start_url: "/",
  display: "standalone",
};

const pwaConfig: Partial<VitePWAOptions> = {
  includeAssets: [
    "robots.txt",
    "favicon.ico",
    "apple-touch-icon.png",
    "icons/*",
  ],
  manifest: manifest,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pwa(pwaConfig)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
