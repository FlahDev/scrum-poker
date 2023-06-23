// libs
import { useCallback } from 'react'

// lib
import { useMuiForm } from 'lib/hooks'

import { RegisterUserFormEvent } from './types'

import { schema } from './schema'

import { RegisterUserFormProps } from './types'

export function useCompose({ onSubmit }: RegisterUserFormProps) {
  const { useField, handleSubmit } = useMuiForm<RegisterUserFormEvent>({
    schema
  })

  const submitForm = useCallback((evt: RegisterUserFormEvent) => {
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
