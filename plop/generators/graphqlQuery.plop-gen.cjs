/** 
    @typedef {Object} GraphqlQueryAnswers
    @property {string} queryName
    @property {boolean} queryType
*/

module.exports = function (plop) {
  plop.setGenerator('Graphql Query', {
    description: 'A custom hook to a query/mutation',
    prompts: [
      {
        name: 'queryName',
        type: 'input',
        message: 'Insert the query name:'
      },
      {
        name: 'queryType',
        type: 'list',
        message: 'Select the procedure type',
        default: 'query',
        choices: [
          { name: 'Query', value: 'query' },
          { name: 'Mutation', value: 'mutation' }
        ]
      }
    ],
    /**
     * @param {GraphqlQueryAnswers} data
     */
    actions: (data) => {
      const actionsArray = []

      let folderPath = ''

      if (data.queryType === 'query') {
        folderPath = `api/graphql/queries/{{camelCase queryName}}`
      } else {
        folderPath = `api/graphql/mutations/{{camelCase queryName}}`
      }

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/{{camelCase queryName}}.{{lowerCase queryType}}-type.ts`,
        templateFile: 'plop/templates/graphqlQuery/type.ts.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/{{camelCase queryName}}.{{lowerCase queryType}}.ts`,
        templateFile: 'plop/templates/graphqlQuery/schema.ts.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/{{camelCase queryName}}.hook.ts`,
        templateFile: 'plop/templates/graphqlQuery/hook.ts.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `src/${folderPath}/index.ts`,
        templateFile: 'plop/templates/graphqlQuery/index.ts.hbs'
      })

      return actionsArray
    }
  })
}
