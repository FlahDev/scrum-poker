// entities
import { UserEntity } from '@/entities'

export interface UserRepositoryType {
  createUser: (data: UserEntity) => Promise<any>
  checkExistsWithEmail: (email: string) => Promise<boolean>
  checkExistsWithId: (id: string) => Promise<boolean>
  listAll: () => Promise<any[]>
}
