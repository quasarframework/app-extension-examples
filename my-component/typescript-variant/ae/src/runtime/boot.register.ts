import { defineBoot } from "@quasar/app-vite";
import MyComponent from "./MyComponent.vue";

export default defineBoot(async ({ app }) => {
  app.component("my-component", MyComponent);
});
