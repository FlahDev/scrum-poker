import { AuthCheckerInterface, ResolverData } from 'type-graphql'

import { UnauthorizedError } from './error'
import { NextApiRequest } from 'next'

import { AuthSign } from './sign'

export class AuthChecker implements AuthCheckerInterface<any> {
  public async check(data: ResolverData<NextApiRequest>) {
    const authHeader = data.context?.headers?.authorization

    if (!authHeader) {
      throw new UnauthorizedError('No token provided.')
    }

    const [, token] = authHeader.split(' ')

    try {
      const decoded = AuthSign.getInstance().decode(token)

      return Boolean(decoded?.id)
    } catch {
      throw new UnauthorizedError('Invalid token provided.')
    }
  }
}
