/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

/**
 * Take this as an example only.
 * We've cherry-picked just a few out of the many
 * things that you can do.
 */

module.exports = function (api) {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^1.0.0')
  api.compatibleWith('@quasar/app', '^1.0.0')

  // We render some files into the hosting project

  if (api.prompts.serviceA) {
    api.render('./templates/serviceA')
  }

  if (api.prompts.serviceB) {
    // we supply interpolation variables
    // to the template
    api.render('./templates/serviceB', {
      productName: api.prompts.productName
    })
  }

  api.render('./templates/common-files')
}
