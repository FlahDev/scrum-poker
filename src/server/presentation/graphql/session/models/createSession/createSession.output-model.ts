// lib
import { Field, ID, ObjectType } from 'type-graphql'

import { UserOutputModel } from '../../../user/models/createUser/createUser.output-model'

@ObjectType()
export class CreateSessionOutputModel {
  @Field(() => ID)
  id: number
}
