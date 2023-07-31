import { ApolloClient, InMemoryCache } from '@apollo/client'

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/graphql`

export const ApolloClientInstance = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache()
})
