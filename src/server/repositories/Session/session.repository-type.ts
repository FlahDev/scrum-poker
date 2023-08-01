// entities
import { SessionEntity } from '@/entities'

export interface SessionRepositoryType {
  createSession: (data: SessionEntity) => Promise<any>
  logInSession: (userEmail: string, roomHash: string) => Promise<SessionEntity>
  logOutSession: (userEmail: string, roomHash: string) => Promise<SessionEntity>
  addUserToSessionList: (
    userEmail: string,
    roomHash: string
  ) => Promise<SessionEntity>
}
