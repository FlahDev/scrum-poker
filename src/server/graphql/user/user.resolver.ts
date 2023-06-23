// graphql
import { Resolver, Query, Mutation, Arg } from 'type-graphql'

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

    const result = await createUserUseCase.execute(data)

    return result
  }

  @Query(() => [UserOutputModel])
  async listAllUsers(): Promise<UserOutputModel[]> {
    const userRepository = new UserRepository()

    const listAllUsersUseCase = new ListAllUsersUseCase(userRepository)

    const result = await listAllUsersUseCase.execute()

    return result as UserOutputModel[]
  }
}
