import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Photo {
  @Field(() => Int)
  id: number

  @Field()
  title: string

  @Field()
  url: string

  @Field()
  thumbnailUrl: string

  @Field(() => Int)
  albumId: number
}
