import { UserEntity } from './user.entity'
import { RoomEntity } from './room.entity'

export class SessionEntity {
  id?: number
  roomId: number
  room: RoomEntity
  userId: number
  user: UserEntity
  isOnline?: boolean

  constructor(data: Partial<SessionEntity>, id?: number) {
    this.id = id
    Object.assign(this, data)
  }

  validate(): boolean {
    return true
  }

  sanitize(): void {}
}
