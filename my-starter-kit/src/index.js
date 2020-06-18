/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

/**
 * Take this as an example only.
 * We've cherry-picked just a few out of the many
 * things that you can do.
 */

function extendQuasarConf (conf) {
  conf.extras.push('ionicons-v4')
  conf.framework.iconSet = 'ionicons-v4'

  //
  // We register a boot file. User does not need to tamper with it,
  // so we keep it into the App Extension code:
  //

  // make sure my-ext boot file is registered
  conf.boot.push('~quasar-app-extension-my-starter-kit/src/boot/my-starter-kit-boot.js')

  // make sure boot file get transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-my-starter-kit[\\/]src/)
}

function onPublish (api, { arg, distDir }) {
  // this hook is called when "quasar build --publish" is called

  // your publish logic here...
  console.log('We should publish now. But maybe later? :)')

  // are we trying to publish a Cordova app?
  if (api.ctx.modeName === 'cordova') {
    // do something
  }
}

function chainWebpack (cfg, { isClient, isServer }, api) {
  // cfg is a Webpack chain Object;
  // docs on how to use it: webpack-chain docs (https://github.com/neutrinojs/webpack-chain)
}

module.exports = function (api) {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^1.0.0')
  api.compatibleWith('@quasar/app', '^1.0.0 || ^2.0.0')

  // Here we extend /quasar.conf.js
  api.extendQuasarConf(extendQuasarConf)

  // Here we register the onPublish hook,
  // only if user answered that he wants the publishing service
  if (api.prompts.publishService) {
    api.onPublish(onPublish)
  }

  // we add/change/remove something in the Webpack configuration
  api.chainWebpack(chainWebpack)

  // there's lots more hooks that you can use...
}
