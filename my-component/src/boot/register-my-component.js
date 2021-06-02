import MyComponent from '../component/MyComponent.vue'

export default ({ app }) => {
  // we globally register our component in the app
  app.component('my-component', MyComponent)
}
