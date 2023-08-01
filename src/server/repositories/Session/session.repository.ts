// prisma
import { prisma } from '@/prisma'

// entities
import { SessionEntity } from '@/entities'

import { SessionRepositoryType } from './session.repository-type'
import { BadRequestError } from '@/errors'

export class SessionRepository implements SessionRepositoryType {
  async createSession(data: SessionEntity) {
    const result = await prisma.session.create({
      data: {
        roomId: data.roomId,
        userId: data.userId,
        isOnline: false
      }
    })

    return result
  }

  async addUserToSessionList(
    userEmail: string,
    roomHash: string
  ): Promise<SessionEntity> {
    const userAlreadyEntered = await prisma.session.findFirst({
      where: {
        user: {
          email: userEmail
        },
        room: {
          hash: roomHash
        }
      }
    })

    if (userAlreadyEntered) {
      return new SessionEntity(userAlreadyEntered)
    }

    const user = await prisma.user.findFirst({
      where: {
        email: userEmail
      }
    })

    if (!user) throw new BadRequestError('Invalid data.')

    const room = await prisma.room.findFirst({
      where: {
        hash: roomHash
      }
    })

    if (!room) throw new BadRequestError('Invalid data.')

    const newSessionUser = await prisma.session.create({
      data: {
        userId: user.id,
        roomId: room.id
      }
    })

    if (!newSessionUser) throw new BadRequestError('Invalid data.')

    return new SessionEntity(newSessionUser)
  }

  async logInSession(
    userEmail: string,
    roomHash: string
  ): Promise<SessionEntity> {
    const session = await this.addUserToSessionList(userEmail, roomHash)

    if (!session) {
      throw new Error('Session not found')
    }

    const result = await prisma.session.update({
      where: {
        id: session.id
      },
      data: {
        isOnline: true
      }
    })

    return new SessionEntity(result)
  }

  async logOutSession(
    userEmail: string,
    roomHash: string
  ): Promise<SessionEntity> {
    const session = await this.addUserToSessionList(userEmail, roomHash)

    if (!session) {
      throw new Error('Session not found')
    }

    const result = await prisma.session.update({
      where: {
        id: session.id
      },
      data: {
        isOnline: false
      }
    })

    return new SessionEntity(result)
  }
}
