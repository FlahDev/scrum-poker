// lib
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class LoginOutputModel {
  @Field(() => String)
  token: string
}
