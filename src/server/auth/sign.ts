import { sign, verify } from 'jsonwebtoken'

import { BadRequestError } from '@/errors'

import { AuthConfig } from './config'

import { ContextType } from './types'

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

  public sign(data: Record<string, any>): string {
    if (!data) throw new BadRequestError()

    const token = sign({}, AuthConfig.secret, {
      expiresIn: AuthConfig.expiresIn,
      subject: JSON.stringify(data)
    })

    return token
  }

  public decode(token: string): ContextType['payload'] | null {
    const decoded = verify(token, AuthConfig.secret)

    const { sub } = decoded

    if (!sub) return null

    const data = JSON.parse(sub as string)

    return data || null
  }
}
