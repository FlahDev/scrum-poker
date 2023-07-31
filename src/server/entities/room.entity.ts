import { UserEntity } from './user.entity'

export class RoomEntity {
  id?: number
  hash: string
  createdAt: Date
  createdBy: UserEntity
  createdById: number
  isActive: boolean
  name: string

  constructor(data: Partial<RoomEntity>, id?: number) {
    this.id = id
    Object.assign(this, data)
  }

  validate(): boolean {
    return true
  }

  sanitize(): void {}
}
