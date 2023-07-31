// libs
import { buildSchema } from 'type-graphql'

import { UserResolver } from './user'
import { AuthResolver } from './auth'

import { AuthChecker } from '@/auth/checker'

export const generateSchema = async () => {
  return buildSchema({
    resolvers: [UserResolver, AuthResolver],
    validate: false,
    authChecker: AuthChecker
  })
}
