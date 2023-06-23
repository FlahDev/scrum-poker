export interface RegisterUserFormEvent {
  userName: string
  userEmail: string
}

export interface RegisterUserFormProps {
  onSubmit: (evt: RegisterUserFormEvent) => void
}
