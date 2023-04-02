/** 
    @typedef {Object} ReactContextAnswers
    @property {string} contextName
    @property {boolean} wantSelect
    @property {string} folderPath
    @property {string} newFolderName
    @property {string} newFolderPath
    @property {string} haveHook
*/

module.exports = function (plop) {
  plop.setGenerator('React Context', {
    description: 'New Post',
    prompts: [
      {
        name: 'contextName',
        type: 'input',
        message: 'Insert the context name (without "Context" in name):'
      },
      {
        name: 'wantSelect',
        type: 'list',
        message: 'Do you want to select a folder or create a new one?',
        default: true,
        choices: [
          { name: 'Select a folder', value: true },
          { name: 'Create a new folder', value: false }
        ]
      },
      {
        name: 'folderPath',
        type: 'directory',
        message: 'Select a folder',
        when: (answers) => answers.wantSelect,
        basePath: './src'
      },
      {
        name: 'newFolderName',
        type: 'input',
        message: 'Insert the new folder name',
        when: (answers) => !answers.wantSelect
      },
      {
        name: 'newFolderPath',
        type: 'directory',
        message: 'Select the new folder path',
        when: (answers) => !answers.wantSelect,
        basePath: './src'
      },
      {
        name: 'haveHook',
        type: 'list',
        message: 'Do you need a hook to your context?',
        default: true,
        choices: [
          { name: 'Yes, I need it', value: true },
          { name: "No, it's simple", value: false }
        ]
      }
    ],
    /**
     * @param {ReactContextAnswers} data
     */
    actions: (data) => {
      const actionsArray = []

      let folderPath = ''
      const fileName = String(data.contextName).toLowerCase()

      if (data.wantSelect) {
        folderPath = `${data.folderPath}/{{lowerCase contextName}}`
      } else if (!data.wantSelect) {
        const newFolderName = String(data.newFolderName).toLowerCase()
        folderPath = `${data.newFolderPath}/${newFolderName}/{{lowerCase contextName}}`
      }

      if (data.haveHook) {
        actionsArray.push({
          type: 'add',
          path: `src/${folderPath}/hook.ts`,
          templateFile: 'plop/templates/reactContext/hook.ts.hbs'
        })
      }

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/context.ts`,
        templateFile: 'plop/templates/reactContext/context.ts.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/provider.tsx`,
        templateFile: 'plop/templates/reactContext/provider.tsx.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/types.ts`,
        templateFile: 'plop/templates/reactContext/types.ts.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/${fileName}.test.tsx`,
        templateFile: 'plop/templates/reactContext/test.tsx.hbs'
      })

      return actionsArray
    }
  })
}
