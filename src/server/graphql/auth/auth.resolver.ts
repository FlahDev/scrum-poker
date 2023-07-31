// graphql
import { Resolver, Mutation, Arg } from 'type-graphql'

// repositories
import { AuthRepository } from '@/repositories'

// useCases
import { LoginUseCase } from '@/useCases/auth'

import { LoginInputModel, LoginOutputModel } from './models/login'

@Resolver()
export class AuthResolver {
  @Mutation(() => LoginOutputModel)
  async login(@Arg('data') data: LoginInputModel): Promise<LoginOutputModel> {
    const authRepository = new AuthRepository()

    const loginUseCase = new LoginUseCase(authRepository)

    const result = await loginUseCase.execute(data.email)

    return { token: result }
  }
}
