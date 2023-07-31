import { ProcessError } from '@/config/processError'

export class UserAlreadyExists extends ProcessError {
  constructor(email: string) {
    const message = `User with email ${email} already exists`
    const statusCode = 507

    super(message, statusCode)
  }
}
