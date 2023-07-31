export interface LoginFormEvent {
  userEmail: string
}

export interface LoginFormProps {
  onSubmit: (evt: LoginFormEvent) => void
}
