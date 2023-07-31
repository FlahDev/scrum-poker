// libs
import { useMemo } from 'react'

import { CREATE_USER_MUTATION } from './createUser.mutation'
import { CreateUserData, CreateUserVars } from './createUser.mutation-type'

import { QueryProps, QueryResult } from 'api/graphql/types'

import { useCreateMutation } from 'api/graphql/useCreateMutation.hook'

export const useCreateUser = (
  props?: QueryProps<CreateUserData>
): QueryResult<CreateUserData, CreateUserVars> => {
  const { data, ...rest } = useCreateMutation<CreateUserData, CreateUserVars>(
    CREATE_USER_MUTATION,
    props || {}
  )

  const result = useMemo<CreateUserData | undefined>(() => {
    if (data?.createUser) {
      return data
    }

    return undefined
  }, [data])

  return {
    ...rest,
    result
  }
}
