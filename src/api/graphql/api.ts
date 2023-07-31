import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { GetUserAuthToken } from 'auth/token'

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/graphql`

const httpLink = createHttpLink({
  uri: apiUrl
})

const authLink = setContext(async (_, { headers, ...context }) => {
  const token = GetUserAuthToken()

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`
    },
    ...context
  }
})

export const ApolloClientInstance = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})
