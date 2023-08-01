// lib
import { Field, ID, ObjectType } from 'type-graphql'

import { UserOutputModel } from '../../../user/models/createUser/createUser.output-model'

@ObjectType()
export class CreateRoomOutputModel {
  @Field(() => ID)
  id: number

  @Field(() => String)
  hash: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => UserOutputModel)
  createdBy: UserOutputModel

  @Field(() => ID)
  createdById: number

  @Field(() => Boolean)
  isActive: boolean

  @Field(() => String)
  name: string
}
