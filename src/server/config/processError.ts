import { GraphQLError } from 'graphql'

export class ProcessError extends GraphQLError {
  public readonly message: string
  public readonly statusCode: number

  constructor(message: string, statusCode = 400) {
    super(message, { extensions: { code: String(statusCode) } })
    this.message = message
    this.statusCode = statusCode
  }
}
