import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Comment } from '@/gql/comment.model'

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number

  @Field()
  title: string

  @Field()
  body: string

  @Field(() => Int)
  userId: number

  @Field(() => [Comment])
  comments: Comment[]
}
