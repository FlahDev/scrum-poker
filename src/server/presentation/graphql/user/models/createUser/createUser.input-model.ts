// lib
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
@InputType()
export class UserInputModel {
  @Field(() => String)
  name: string

  @Field(() => String)
  email: string
}
