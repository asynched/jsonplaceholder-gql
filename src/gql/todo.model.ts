import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Todo {
  @Field((type) => Int)
  id: number

  @Field()
  title: string

  @Field()
  completed: boolean

  @Field((type) => Int)
  userId: number
}
