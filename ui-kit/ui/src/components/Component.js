import { QBadge } from 'quasar'

export default {
  name: 'MyComponent',

  render (h) {
    return h(QBadge, {
      staticClass: 'MyComponent',
      props: {
        label: 'MyComponent'
      }
    })
  }
}
