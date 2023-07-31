// libs
import { useCallback } from 'react'
import { toast } from 'react-toastify'

import { useLogin } from 'api/graphql/mutations/login'

import { SetUserAuthToken } from 'auth/token'

import { LoginFormEvent } from 'elements/auth/LoginForm'

import { useRouter } from 'next/navigation'
import { LoginData } from 'api/graphql/mutations/login/login.mutation-type'

export function useCompose() {
  const { push } = useRouter()

  const handleSuccess = useCallback((data: LoginData) => {
    const token = data?.login?.token

    if (token) {
      toast.success('Login realizado!')

      SetUserAuthToken(token)

      return setTimeout(() => push('/home'), 100)
    }

    toast.error('Falha na autenticação!')
  }, [])

  const { run } = useLogin({ onSuccess: handleSuccess })

  const handleSubmitForm = useCallback((evt: LoginFormEvent) => {
    run({ data: { email: evt.userEmail } })
  }, [])

  return { handleSubmitForm }
}
