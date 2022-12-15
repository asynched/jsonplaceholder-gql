import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Todo } from '@/gql/todo.model'

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number

  @Field()
  name: string

  @Field()
  username: string

  @Field()
  email: string

  @Field()
  phone: string

  @Field()
  website: string

  @Field(() => [Todo])
  todos: Todo[]
}
