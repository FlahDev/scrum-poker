// libs
import { useCallback } from 'react'
import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'

export function useCompose() {
  const { push } = useRouter()

  const handleSubmitForm = useCallback(() => {
    toast.success('User created successfully')

    setTimeout(() => push('/user/register'), 1000)
  }, [])

  return { handleSubmitForm }
}
