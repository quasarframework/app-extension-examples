## Quasar UI Kit -- App Extension MyComponent

This is an example of a Quasar App Extension using the `ui` kit (`quasar create my-component --kit ui`) that injects a custom component into the hosting Quasar app.

Take into the account that for this example, the `ext-id` of this App Extension is `my-component` (this can be anything, and please do change it for a more appropriate name for your App Extension).

Use the `ui` kit for making a custom component/directive that will be publicly used. Configure the `app-extension` folder to provide a boot file for your component/directive when it is being used with Quasar CLI.

In the `ui` folder is a Quasar `dev` project for testing various aspects of your component/directive in isolation.
