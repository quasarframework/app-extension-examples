## Quasar App Extension MyComponent

This is an example of a Quasar App Extension that injects a custom component into the hosting Quasar app. The App Extension requires some rules added to Webpack and chains them into the build.

In this example, we will chain the `ware-loader` webpack plugin to load markdown files so they can be processed by the package `markdown-it`.

Take into the account that for this example, the `ext-id` of this App Extension is `my-component` (this can be anything, and please do change it for a more appropriate name for your App Extension).

