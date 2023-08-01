// lib
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
@InputType()
export class CreateSessionInputModel {
  @Field(() => String)
  roomHash: string
}
