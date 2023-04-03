// entities
import { UserEntity } from '@/entities'

export interface UserRepositoryType {
  createUser: (data: UserEntity) => Promise<any>
  listAll: () => Promise<UserEntity[]>
}
