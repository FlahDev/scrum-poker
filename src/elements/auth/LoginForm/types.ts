export interface LoginFormEvent {
  userName: string
  userEmail: string
}

export interface LoginFormProps {
  onSubmit: (evt: LoginFormEvent) => void
}
