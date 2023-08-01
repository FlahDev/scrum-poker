// entities
import { SessionEntity } from '@/entities'

// repositories
import { SessionRepositoryType } from '@/repositories/session.repository'

export class LogOutSession {
  constructor(private sessionRepository: SessionRepositoryType) {}

  async execute(userEmail: string, roomHash: string): Promise<SessionEntity> {
    const result = await this.sessionRepository.logOutSession(
      userEmail,
      roomHash
    )

    return result
  }
}
