import { AuthCheckerInterface, ResolverData } from 'type-graphql'
import { verify } from 'jsonwebtoken'

import { UnauthorizedError } from './error'
import { NextApiRequest } from 'next'

import { AuthConfig } from './config'

export class AuthChecker implements AuthCheckerInterface<any> {
  async check(data: ResolverData<NextApiRequest>) {
    const authHeader = data.context?.headers?.authorization

    if (!authHeader) {
      throw new UnauthorizedError('No token provided.')
    }

    const [, token] = authHeader.split(' ')

    try {
      const decoded = verify(token, AuthConfig.secret)

      return Boolean(decoded)
    } catch {
      throw new UnauthorizedError('Invalid token provided.')
    }
  }
}
