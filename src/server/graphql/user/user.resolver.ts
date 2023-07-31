// graphql
import { Resolver, Query, Mutation, Arg, Authorized } from 'type-graphql'

// repositories
import { UserRepository } from '@/repositories'

// useCases
import { CreateUserUseCase, ListAllUsersUseCase } from '@/useCases'

import { UserInputModel, UserOutputModel } from './models/createUser'

@Resolver()
export class UserResolver {
  @Mutation(() => UserOutputModel)
  async createUser(
    @Arg('data') data: UserInputModel
  ): Promise<UserOutputModel> {
    const userRepository = new UserRepository()

    const createUserUseCase = new CreateUserUseCase(userRepository)

    return (await createUserUseCase.execute(data)) as UserOutputModel
  }

  @Authorized()
  @Query(() => [UserOutputModel])
  async listAllUsers(): Promise<UserOutputModel[]> {
    const userRepository = new UserRepository()

    const listAllUsersUseCase = new ListAllUsersUseCase(userRepository)

    const result = await listAllUsersUseCase.execute()

    return result as UserOutputModel[]
  }
}
