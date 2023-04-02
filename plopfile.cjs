const inquirerDirectory = require('inquirer-directory')

const Generators = require('./plop/generators/index.cjs')

module.exports = function (plop) {
  plop.setPrompt('directory', inquirerDirectory)

  Generators(plop)
}
