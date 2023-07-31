// entities
import { AuthEntity, UserEntity } from '@/entities'

export interface AuthRepositoryType {
  login: (data: AuthEntity) => Promise<UserEntity | null>
}
