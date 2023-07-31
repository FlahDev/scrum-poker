// entities
import { UserEntity } from '@/entities'

// repositories
import { UserRepositoryType } from '@/repositories'

import { UserInputModel } from '@/graphql/user/models/createUser'

import { UserAlreadyExists } from './errors'
import { BadRequestError } from '@/errors'

export class CreateUserUseCase {
  constructor(private userRepository: UserRepositoryType) {}

  async execute(data: UserInputModel): Promise<UserEntity> {
    const user = new UserEntity(data)

    if (!user.validate()) throw new BadRequestError('Invalid user data.')

    const exists = await this.userRepository.checkExistsWithEmail(user.email)

    if (exists) throw new UserAlreadyExists(user.email)

    return await this.userRepository.createUser(user)
  }
}
