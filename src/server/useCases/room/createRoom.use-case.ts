// repositories
import { RoomRepositoryType } from '@/repositories'

// entities
import { RoomEntity } from '@/entities'

export class CreateRoomUseCase {
  constructor(private roomRepository: RoomRepositoryType) {}

  async execute(roomName: string, userEmail: string) {
    const roomEntity = new RoomEntity({ name: roomName })

    if (!roomEntity.validate()) throw new Error('Invalid room data.')

    return await this.roomRepository.createRoom(roomEntity, userEmail)
  }
}
