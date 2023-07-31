export class AuthEntity {
  email: string

  constructor(data: Partial<AuthEntity>) {
    Object.assign(this, data)
  }

  validate(): boolean {
    if (!this.email) return false

    if (typeof this.email !== 'string') return false

    if (this.email.length > 150) return false

    return true
  }

  sanitize(): void {
    return
  }
}
