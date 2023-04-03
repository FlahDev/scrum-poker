// libs
import { buildSchema } from 'type-graphql'

import { UserResolver } from './user'

export const generateSchema = async () => {
  return buildSchema({
    resolvers: [UserResolver],
    validate: true
  })
}
