/**
 * Quasar App Extension uninstall script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/uninstall-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/UninstallAPI.js
 */

// we yarn added it to our App Extension,
// so we can import the following:
const rimraf = require('rimraf')

module.exports = function (api) {
  // Careful when you remove folders!
  // You don't want to delete files that are still needed by the Project,
  // or files that are not owned by this app extension.


  // Here, we could also remove the /src/services folder altogether,
  // but what if the user has added other files into this folder?

  if (api.prompts.serviceA) {
    // we added it on install, so we remove it
    rimraf.sync(api.resolve.src('services/serviceA.js'))
  }

  if (api.prompts.serviceB) {
    // we added it on install, so we remove it
    rimraf.sync(api.resolve.src('services/serviceB.js'))
  }

  // we added it on install, so we remove it
  rimraf.sync(api.resolve.app('some-folder'))
  // warning... we've added this folder, but what if the
  // developer added more files into this folder???
}
