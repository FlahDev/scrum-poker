// libs
import { useMemo } from 'react'

import { LOGIN_MUTATION } from './login.mutation'
import { LoginData, LoginVars } from './login.mutation-type'

import { QueryProps, QueryResult } from 'api/graphql/types'

import { useCreateMutation } from 'api/graphql/useCreateMutation.hook'

export const useLogin = (
  props: QueryProps<LoginData>
): QueryResult<LoginData, LoginVars> => {
  const { data, ...rest } = useCreateMutation<LoginData, LoginVars>(
    LOGIN_MUTATION,
    props
  )

  const result = useMemo<LoginData | undefined>(() => {
    if (data?.login?.token) {
      return data
    }

    return undefined
  }, [data])

  return {
    ...rest,
    result
  }
}
