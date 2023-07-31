const tokenKey = process.env.NEXT_PUBLIC_AUTH_TOKEN || ''

export const SetUserAuthToken = (token: string): boolean => {
  if (token && window && tokenKey) {
    sessionStorage.setItem(tokenKey, token)

    return true
  }

  return false
}

export const GetUserAuthToken = (): string | null => {
  if (window && tokenKey) {
    const token = sessionStorage.getItem(tokenKey)

    return token || null
  }

  return null
}
