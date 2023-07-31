import { ProcessError } from '@/config/processError'

export class BadRequestError extends ProcessError {
  constructor(message = `Bad request.`) {
    const statusCode = 400

    super(message, statusCode)
  }
}
