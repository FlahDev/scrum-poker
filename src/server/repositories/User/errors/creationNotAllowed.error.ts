import { ProcessError } from '../../../config/processError'

export class CreationNotAllowed extends ProcessError {
  constructor(email: string) {
    const message = `Creation of user with email ${email} is not allowed`
    const statusCode = 507

    super(message, statusCode)
  }
}
