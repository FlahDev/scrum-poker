const ReactComponentGenerator = require('./reactComponent.plop-gen.cjs')
const ReactContextGenerator = require('./reactContext.plop-gen.cjs')
const PrismaEntityGenerator = require('./prismaEntity.plop-gen.cjs')

module.exports = function (plop) {
  ReactComponentGenerator(plop)
  ReactContextGenerator(plop)
  PrismaEntityGenerator(plop)
}
