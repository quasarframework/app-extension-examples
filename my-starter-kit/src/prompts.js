/**
 * Quasar App Extension prompts script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/prompts-api
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:

  return [
    {
      name: 'name',
      type: 'string',
      required: true,
      message: 'Quasar CLI Extension name (without prefix)',
    },
    {
      name: 'preset',
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  ]

 */

module.exports = function () {
  return [
    {
      name: 'serviceA',
      type: 'confirm',
      message: 'Do you want service "A"?'
    },

    {
      name: 'serviceB',
      type: 'confirm',
      message: 'Do you want service "B"?'
    },

    {
      name: 'productName',
      type: 'string',
      required: true,
      when: 'service.B',
      message: 'Since you want service "B", what is the Product Name?',
      default: 'MyProduct'
    },

    {
      name: 'publishService',
      type: 'confirm',
      message: 'Do you want the publishing service?',
      default: true
    }
  ]
}
