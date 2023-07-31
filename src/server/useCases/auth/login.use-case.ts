// repositories
import { AuthRepository } from '@/repositories'

// entities
import { AuthEntity } from '@/entities'

import { InvalidDataError, UnauthorizedError } from '@/errors'

import { AuthSign } from '@/auth/sign'

export class LoginUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(userEmail: string): Promise<string> {
    const authEntity = new AuthEntity({ email: userEmail })

    if (!authEntity.validate()) throw new InvalidDataError()

    const result = await this.authRepository.login(authEntity)

    if (!result) throw new UnauthorizedError()

    return AuthSign.getInstance().sign(result)
  }
}
