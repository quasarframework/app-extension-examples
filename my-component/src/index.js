/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf (conf) {
  // make sure my-ext boot file is registered
  conf.boot.push('~quasar-app-extension-my-component/src/boot/register-my-component.js')

  // make sure boot & component files get transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-my-component[\\/]src/)

  // make sure my-ext css goes through webpack to avoid ssr issues
  conf.css.push('~quasar-app-extension-my-component/src/component/MyComponent.sass')
}

module.exports = function (api) {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^2.0.0-beta.19')
  api.compatibleWith('@quasar/app', '^3.0.0-beta.28')

  // Here we extend /quasar.conf.js, so we can add
  // a boot file which registers our new UI component;
  // "extendConf" will be defined below (keep reading the tutorial)
  api.extendQuasarConf(extendConf)
}
