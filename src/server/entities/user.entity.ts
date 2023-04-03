export class UserEntity {
  id?: number
  name: string

  constructor(data: Partial<UserEntity>, id?: number) {
    this.id = id
    Object.assign(this, data)
  }

  validate(): boolean {
    return true
  }

  sanitize(): void {}
}
