import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  body: string

  @Field(() => Int)
  postId: number
}
