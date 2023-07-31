// lib
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
@InputType()
export class CreateRoomInputModel {
  @Field(() => String)
  name: string
}
