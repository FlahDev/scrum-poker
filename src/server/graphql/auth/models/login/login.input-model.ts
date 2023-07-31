// lib
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
@InputType()
export class LoginInputModel {
  @Field(() => String)
  email: string
}
