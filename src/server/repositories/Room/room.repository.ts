// libs
import { v4 as uuidv4 } from 'uuid'

// prisma
import { prisma } from '@/prisma'

// entities
import { RoomEntity, UserEntity } from '@/entities'

// errors
import { BadRequestError } from '@/errors'

import { RoomRepositoryType } from './room.repository-type'

export class RoomRepository implements RoomRepositoryType {
  async createRoom(
    data: Pick<RoomEntity, 'name'>,
    createdByEmail: string
  ): Promise<RoomEntity> {
    const createdByUser = await prisma.user.findUnique({
      where: {
        email: createdByEmail
      }
    })

    if (!createdByUser) throw new BadRequestError('User not found.')

    const result = await prisma.room.create({
      data: {
        name: data.name,
        createdById: createdByUser.id,
        hash: uuidv4(),
        isActive: false
      }
    })

    return new RoomEntity(result)
  }

  async getRoomByHash(hash: string): Promise<RoomEntity | null> {
    if (hash) {
      const room = await prisma.room.findFirst({
        where: {
          hash
        },
        include: {
          createdBy: true
        }
      })

      if (room) {
        const user = new UserEntity(room.createdBy)

        return new RoomEntity({ ...room, createdBy: user })
      }
    }

    return null
  }
}
