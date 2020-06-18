/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()

const chainWebpack = function (ctx, chain) {
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
  api.compatibleWith('@quasar/app', '^1.0.0 || ^2.0.0')

  // chain webpack
  api.chainWebpack((chain) => chainWebpack(api.ctx, chain))
}
