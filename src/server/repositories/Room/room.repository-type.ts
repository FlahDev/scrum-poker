// entities
import { RoomEntity } from '@/entities'

export interface RoomRepositoryType {
  createRoom: (
    data: Pick<RoomEntity, 'name'>,
    createdByEmail: string
  ) => Promise<RoomEntity>
  getRoomByHash: (hash: string) => Promise<RoomEntity | null>
}
