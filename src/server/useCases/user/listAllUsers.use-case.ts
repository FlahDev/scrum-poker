// repositories
import { UserRepositoryType } from '@/repositories'

// entities
import { UserEntity } from '@/entities'

export class ListAllUsersUseCase {
  constructor(private userRepository: UserRepositoryType) {}

  async execute(): Promise<UserEntity[]> {
    const result = await this.userRepository.listAll()

    return result.map((item) => new UserEntity(item, item.id))
  }
}
