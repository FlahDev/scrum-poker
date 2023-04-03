// graphql
import { Resolver, Query } from 'type-graphql'

@Resolver()
export class UserResolver {
  @Query(() => String)
  async helloWorld(): Promise<string> {
    return 'hello world'
  }
}
