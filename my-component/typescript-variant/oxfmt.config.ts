import { defineConfig } from "oxfmt";

export default defineConfig({
  $schema: "./node_modules/oxfmt/configuration_schema.json",

  ignorePatterns: [
    "**/node_modules/",
    "/ae/src/templates/",
    "/playground/dist/",
    "/playground/quasar.config.*.temporary.compiled*",
    "/playground/.quasar/",
    "/playground/src-cordova/",
    "/playground/src-capacitor/"
  ],

  printWidth: 80,
  arrowParens: "avoid",
  bracketSpacing: true,
  bracketSameLine: false,
  htmlWhitespaceSensitivity: "strict",
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "none",
  useTabs: false,
  vueIndentScriptAndStyle: false
});
