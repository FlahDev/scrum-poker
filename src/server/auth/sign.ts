import { sign } from 'jsonwebtoken'

import { BadRequestError } from '@/errors'

import { AuthConfig } from './config'

export class AuthSign {
  private static instance: AuthSign

  private constructor() {}

  private static createInstance(): AuthSign {
    return new AuthSign()
  }

  public static getInstance(): AuthSign {
    if (!this.instance) {
      this.instance = this.createInstance()
    }

    return this.instance
  }

  public sign(data: string): string {
    if (!data) throw new BadRequestError()

    const token = sign({}, AuthConfig.secret, {
      expiresIn: AuthConfig.expiresIn,
      subject: data
    })

    return token
  }
}
