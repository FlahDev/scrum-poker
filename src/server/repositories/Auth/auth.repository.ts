// prisma
import { prisma } from '@/prisma'

// entities
import { AuthEntity, UserEntity } from '@/entities'

import { AuthRepositoryType } from './auth.repository-type'

export class AuthRepository implements AuthRepositoryType {
  async login(data: AuthEntity) {
    const result = await prisma.user.findFirst({
      where: {
        email: data.email
      }
    })

    if (result) return new UserEntity(result)

    return result
  }
}
