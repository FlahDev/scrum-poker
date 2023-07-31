// libs
import { useCallback } from 'react'

// elements
import { RegisterUserFormEvent } from 'elements/user/RegisterUserForm'

// services
import { useCreateUser } from 'api/graphql/mutations/createUser/createUser.hook'

export function useCompose() {
  const { run, isLoading } = useCreateUser({})

  const handleSubmitForm = useCallback((evt: RegisterUserFormEvent) => {
    if (!isLoading) {
      run({
        data: {
          email: evt.userEmail,
          name: evt.userName
        }
      })
    }
  }, [])

  return {
    handleSubmitForm
  }
}
