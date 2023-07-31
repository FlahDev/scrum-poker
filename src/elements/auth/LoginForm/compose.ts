// libs
import { useCallback } from 'react'

// lib
import { useMuiForm } from 'lib/hooks'

import { schema } from './schema'

import { LoginFormProps, LoginFormEvent } from './types'

export function useCompose({ onSubmit }: LoginFormProps) {
  const { useField, handleSubmit } = useMuiForm<LoginFormEvent>({
    schema
  })

  const submitForm = useCallback((evt: LoginFormEvent) => {
    if (evt && onSubmit) {
      onSubmit(evt)
    }
  }, [])

  const handleSubmitForm = handleSubmit(submitForm)

  return {
    useField,
    handleSubmitForm
  }
}
