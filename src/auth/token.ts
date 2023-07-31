const tokenKey = process.env.NEXT_PUBLIC_AUTH_TOKEN || ''

export const SetUserAuthToken = (token: string): boolean => {
  if (token && window && tokenKey) {
    localStorage.setItem(tokenKey, token)

    return true
  }

  return false
}

export const GetUserAuthToken = (): string | null => {
  const token = localStorage.getItem(tokenKey)

  return token || null
}
