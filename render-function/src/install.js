/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

const { existsSync } = require('fs')

module.exports = function (api) {
  if (api.hasVite === true) {
    api.compatibleWith('@quasar/app-vite', '^1.0.0-alpha.0')
  }
  else {
    // should be "@quasar/app-webpack" but that is not backward compatible
    api.compatibleWith('@quasar/app', '^3.0.0')
  }

  let pageExists = false

  // we can use 'api.resolve.src' to see if "SpecialPage.vue already exists"
  // https://quasar.dev/app-extensions/development-guide/install-api#api.resolve
  if (existsSync(api.resolve.app('pages/SpecialPage.vue'))) {
    pageExists = true
  }

  // on subsequent installs, the user will be asked to overwrite this file
  api.render('./templates/pages')

  // if the page didn't originally exist, show a message
  // https://quasar.dev/app-extensions/development-guide/install-api#api.onExitLog
  api.onExitLog('Be sure to add "SpecialPage.vue" to your routes.')
}
