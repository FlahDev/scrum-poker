// lib
import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class UserOutputModel {
  @Field(() => ID)
  id: number

  @Field(() => String)
  name: string

  @Field(() => String)
  email: string
}
