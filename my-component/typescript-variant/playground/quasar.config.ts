// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from "#q-app";

export default defineConfig((/* ctx */) => ({
  boot: [],
  css: ["app.scss"],
  extras: [
    "roboto-font", // optional, you are not bound to it
    "material-icons" // optional, you are not bound to it
  ],

  build: {
    filenameBasedRouting: true,
    vueRouterMode: "history",
    typescript: {
      strict: true,
      vueShim: true
    }
  },

  devServer: {
    open: true
  }
}));
