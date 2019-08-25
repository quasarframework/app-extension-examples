/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()

function extendConf (conf) {
  // make sure my-ext boot file is registered
  conf.boot.push('~quasar-app-extension-my-component/src/boot/register-my-component.js')

  // make sure boot & component files get transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-my-component[\\/]src/)

  // make sure my-ext css goes through webpack to avoid ssr issues
  conf.css.push('~quasar-app-extension-my-component/src/component/MyComponent.styl')
}

const chainWebpack = function (ctx, chain, isClient) {
  const rule = chain.module.rule('md')
    .test(/\.md$/)
    .pre()

  rule.use('v-loader')
    .loader('vue-loader')
    .options({
      productionMode: ctx.prod,
      compilerOptions: {
        preserveWhitespace: false
      },
      transformAssetUrls: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
      }
    })

  rule.use('ware-loader')
    .loader('ware-loader')
    .options({
      raw: true,
      middleware: function (source) {
        // use markdown-it to render the markdown file to html, then
        // surround the output of that that with Vue template syntax
        // so it can be processed by the 'vue-loader'
        return `<template><div>${md.render(source)}</div></template>`
      }
    })
}

module.exports = function (api) {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^1.0.0')
  api.compatibleWith('@quasar/app', '^1.0.0')

  // Here we extend /quasar.conf.js, so we can add
  // a boot file which registers our new UI component;
  // "extendConf" will be defined below (keep reading the tutorial)
  api.extendQuasarConf(extendConf)

  // chain webpack
  api.chainWebpack((chain, { isClient }) => chainWebpack(api.ctx, chain, isClient))
}
