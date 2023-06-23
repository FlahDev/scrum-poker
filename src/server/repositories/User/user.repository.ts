// prisma
import { prisma } from '@/prisma'

// entities
import { UserEntity } from '@/entities'

// errors
import { CreationNotAllowed } from './errors'

import { UserRepositoryType } from './user.repository-type'

export class UserRepository implements UserRepositoryType {
  async checkExistsWithEmail(email: string): Promise<boolean> {
    if (!email) return false

    const found = await prisma.user.findFirst({
      where: {
        email
      }
    })

    return Boolean(found)
  }

  async checkExistsWithId(id: string): Promise<boolean> {
    if (!id || !+id) return false

    const found = await prisma.user.findFirst({
      where: {
        id: +id
      }
    })

    return Boolean(found)
  }

  async createUser(data: UserEntity) {
    const found = await prisma.user.findFirst({
      where: {
        email: data.email
      }
    })

    if (found) throw new CreationNotAllowed(data.email)

    return await prisma.user.create({
      data
    })
  }

  async listAll() {
    return await prisma.user.findMany()
  }
}
