// prisma
import { prisma } from '@/prisma'

// entities
import { UserEntity } from '@/entities'

import { UserRepositoryType } from './user.repository-type'

export class UserRepository implements UserRepositoryType {
  async createUser(data: UserEntity) {
    const result = await prisma.user.create({
      data
    })

    return result
  }

  async listAll(): Promise<UserEntity[]> {
    const result = await prisma.user.findMany()

    return result.map((item) => new UserEntity(item, item.id))
  }
}
