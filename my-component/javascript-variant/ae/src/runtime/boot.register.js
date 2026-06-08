import { defineBoot } from '#q-app'
import MyComponent from './MyComponent.vue'

export default defineBoot(async ({ app }) => {
  app.component("my-component", MyComponent)
})
