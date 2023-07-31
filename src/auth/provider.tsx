// libs
import { Children, useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

import { GetUserAuthToken } from './token'

export function AuthProvider({ children }: Children) {
  const { push } = useRouter()

  useLayoutEffect(() => {
    const token = GetUserAuthToken()

    if (!token) return push('/auth/login')
  }, [])

  return <>{children}</>
}
