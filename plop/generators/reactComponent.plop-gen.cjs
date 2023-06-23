/** 
    @typedef {Object} ReactComponentAnswers
    @property {string} componentName
    @property {boolean} wantSelect
    @property {string} folderPath
    @property {string} newFolderName
    @property {string} newFolderPath
    @property {boolean} requireStyles
*/

module.exports = function (plop) {
  plop.setGenerator('React Component', {
    description:
      'A React Component with jsx, compose, test, stories and optional styles',
    prompts: [
      {
        name: 'componentName',
        type: 'input',
        message: 'Insert the component name:'
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
        name: 'requireStyles',
        type: 'list',
        message: 'Do you component need styles?',
        default: false,
        choices: [
          {
            name: "No, it's logic only/It just extend another components",
            value: false
          },
          { name: 'Yes, it need styles', value: true }
        ]
      }
    ],
    /**
     * @param {ReactComponentAnswers} data
     */
    actions: (data) => {
      const actionsArray = []

      let folderPath = ''
      const fileName = String(data.componentName).toLowerCase()

      if (data.wantSelect) {
        folderPath = `${data.folderPath}/{{pascalCase componentName}}`
      } else if (!data.wantSelect) {
        const newFolderName = String(data.newFolderName).toLowerCase()
        folderPath = `${data.newFolderPath}/${newFolderName}/{{pascalCase componentName}}`
      }

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/component.tsx`,
        templateFile: 'plop/templates/reactComponent/component.tsx.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/compose.ts`,
        templateFile: 'plop/templates/reactComponent/compose.ts.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/types.ts`,
        templateFile: 'plop/templates/reactComponent/types.ts.hbs'
      })

      // actionsArray.push({
      //   type: 'add',
      //   path: `src/${folderPath}/${fileName}.stories.tsx`,
      //   templateFile: 'plop/templates/reactComponent/component.stories.tsx.hbs'
      // })

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/${String(data.componentName)}.test.tsx`,
        templateFile: 'plop/templates/reactComponent/test.tsx.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/index.ts`,
        templateFile: 'plop/templates/reactComponent/index.ts.hbs'
      })

      if (data.requireStyles) {
        actionsArray.push({
          type: 'add',
          path: `src/${folderPath}/styles.ts`,
          templateFile: 'plop/templates/reactComponent/styles.ts.hbs'
        })
      }

      return actionsArray
    }
  })
}
