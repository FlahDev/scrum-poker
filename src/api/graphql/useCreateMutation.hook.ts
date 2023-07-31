// libs
import { useMemo, useCallback, useState } from 'react'
import { DocumentNode, useMutation } from '@apollo/client'

import { QueryProps } from './types'

interface UseCreateMutationResult<TData, TVars> {
  data?: TData | null | undefined
  error?: any
  isError: boolean
  isLoading: boolean
  hasCalledOnce: boolean
  run: (vars?: TVars) => void
}

export const useCreateMutation = <TData, TVars>(
  mutation: DocumentNode,
  {
    onHasCompletedOnce,
    onSuccess,
    jumpFirstCall,
    onError,
    onRefetch
  }: QueryProps<TData>
): UseCreateMutationResult<TData, TVars> => {
  const [alreadyCalled, setAlreadyCalled] = useState(false)

  const mutationCompletedCallback = useCallback(
    (data: TData) => {
      if (!alreadyCalled) {
        setAlreadyCalled(true)

        if (onHasCompletedOnce) {
          onHasCompletedOnce()
        }

        if (!jumpFirstCall && onSuccess) {
          onSuccess(data)
        }
      } else if (onSuccess) {
        onSuccess(data)
      }
    },
    [onSuccess, jumpFirstCall, onHasCompletedOnce]
  )

  const [exec, { data, error, loading, called }] = useMutation<TData, TVars>(
    mutation,
    {
      onError,
      onCompleted: mutationCompletedCallback
    }
  )

  const run = useCallback(
    async (vars?: TVars) => {
      await exec({ variables: vars })

      if (onRefetch) {
        onRefetch()
      }
    },
    [onRefetch]
  )

  const isLoading = useMemo<boolean>(() => loading, [loading])

  const isError = useMemo<boolean>(() => Boolean(error), [error])

  const hasCalledOnce = useMemo<boolean>(() => called, [called])

  return {
    data,
    error,
    isError,
    isLoading,
    hasCalledOnce,
    run
  }
}
