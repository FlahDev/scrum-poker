// libs
import { useCallback } from 'react'

// elements
import { RegisterUserFormEvent } from 'elements/user/RegisterUserForm'

export function useCompose() {
  const handleSubmitForm = useCallback((evt: RegisterUserFormEvent) => {
    // eslint-disable-next-line no-console
    console.log(evt)
  }, [])

  return {
    handleSubmitForm
  }
}
