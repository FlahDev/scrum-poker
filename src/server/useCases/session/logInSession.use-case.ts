// entities
import { SessionEntity } from '@/entities'

// repositories
import { SessionRepositoryType } from '@/repositories/session.repository'

export class LogInSession {
  constructor(private sessionRepository: SessionRepositoryType) {}

  async execute(userEmail: string, roomHash: string): Promise<SessionEntity> {
    const result = await this.sessionRepository.logInSession(
      userEmail,
      roomHash
    )

    return result
  }
}
