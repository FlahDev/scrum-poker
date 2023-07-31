// repositories
import { RoomRepositoryType } from '@/repositories'

export class GetRoomByHashUseCase {
  constructor(private roomRepository: RoomRepositoryType) {}

  async execute(hash: string) {
    return await this.roomRepository.getRoomByHash(hash)
  }
}
