// graphql
import { Resolver, Mutation, Query, Arg, Ctx, Authorized } from 'type-graphql'

// repositories
import { SessionRepository } from '@/repositories'

// useCases
import { LogInSession, LogOutSession } from '@/useCases/session'

import type { ContextType } from '@/auth/types'

import {
  CreateSessionInputModel,
  CreateSessionOutputModel
} from './models/createSession'

@Resolver()
export class RoomResolver {
  @Authorized()
  @Mutation(() => CreateSessionOutputModel)
  async logInSession(
    @Arg('data') data: CreateSessionInputModel,
    @Ctx() { payload }: ContextType
  ): Promise<CreateSessionOutputModel> {
    const sessionRepository = new SessionRepository()

    const logInSession = new LogInSession(sessionRepository)

    const result = await logInSession.execute(payload.email, data.roomHash)

    return result as CreateSessionOutputModel
  }
}
