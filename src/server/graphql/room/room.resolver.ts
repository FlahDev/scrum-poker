// graphql
import { Resolver, Mutation, Query, Arg, Ctx, Authorized } from 'type-graphql'

// repositories
import { RoomRepository } from '@/repositories'

// useCases
import { CreateRoomUseCase, GetRoomByHashUseCase } from '@/useCases/room'

import type { ContextType } from '@/auth/types'

import {
  CreateRoomInputModel,
  CreateRoomOutputModel
} from './models/createRoom'

@Resolver()
export class RoomResolver {
  @Authorized()
  @Mutation(() => CreateRoomOutputModel)
  async createRoom(
    @Arg('data') data: CreateRoomInputModel,
    @Ctx() { payload }: ContextType
  ): Promise<CreateRoomOutputModel> {
    const roomRepository = new RoomRepository()

    const createRoomUseCase = new CreateRoomUseCase(roomRepository)

    const result = await createRoomUseCase.execute(data.name, payload.email)

    return result as CreateRoomOutputModel
  }

  @Authorized()
  @Query(() => CreateRoomOutputModel)
  async getRoomByHash(
    @Arg('hash') hash: string
  ): Promise<CreateRoomOutputModel> {
    const roomRepository = new RoomRepository()

    const getRoomByHashUseCase = new GetRoomByHashUseCase(roomRepository)

    return (await getRoomByHashUseCase.execute(hash)) as CreateRoomOutputModel
  }
}
