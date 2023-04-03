/** 
    @typedef {Object} PrismaEntityAnswers
    @property {string} entityName
*/

module.exports = function (plop) {
  plop.setGenerator('Prisma Entity', {
    description: 'A prisma entity with repository and type',
    prompts: [
      {
        name: 'entityName',
        type: 'input',
        message: 'Insert the entity name:'
      }
    ],
    /**
     * @param {PrismaEntityAnswers} data
     */
    actions: (data) => {
      const actionsArray = []
      const fileName = String(data.entityName).toLowerCase()

      actionsArray.push({
        type: 'add',
        path: `src/server/entities/${fileName}.entity.ts`,
        templateFile: 'plop/templates/prismaEntity/entity.ts.hbs'
      })

      const repositoryPath = `src/server/repositories/{{pascalCase entityName}}`

      actionsArray.push({
        type: 'add',
        path: `${repositoryPath}/${fileName}.repository.ts`,
        templateFile: 'plop/templates/prismaEntity/repository.ts.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `${repositoryPath}/${fileName}.repository-type.ts`,
        templateFile: 'plop/templates/prismaEntity/type.ts.hbs'
      })

      actionsArray.push({
        type: 'add',
        path: `${repositoryPath}/index.ts`,
        templateFile: 'plop/templates/prismaEntity/repo-index.ts.hbs'
      })

      return actionsArray
    }
  })
}
