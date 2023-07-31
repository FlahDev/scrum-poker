interface UserContextData {
  id: string
  email: string
  name: string
}

export interface ContextType {
  payload: UserContextData
}
