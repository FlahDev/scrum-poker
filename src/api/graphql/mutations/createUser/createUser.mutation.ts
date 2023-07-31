import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($data: UserInputModel!) {
    createUser(data: $data) {
      id
      name
      email
    }
  }
`
