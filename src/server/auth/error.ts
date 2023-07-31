import { ProcessError } from '@/config/processError'

export class UnauthorizedError extends ProcessError {
  constructor(message = 'Unauthorized') {
    const statusCode = 401

    super(message, statusCode)
  }
}
