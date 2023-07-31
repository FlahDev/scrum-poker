import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInputModel!) {
    login(data: $data) {
      token
    }
  }
`
