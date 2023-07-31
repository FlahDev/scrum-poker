import { ProcessError } from '@/config/processError'

export class InvalidDataError extends ProcessError {
  constructor() {
    const message = `Invalid data`
    const statusCode = 400

    super(message, statusCode)
  }
}
