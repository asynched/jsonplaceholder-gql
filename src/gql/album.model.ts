import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Photo } from '@/gql/photo.model'

@ObjectType()
export class Album {
  @Field(() => Int)
  id: number

  @Field()
  title: string

  @Field(() => Int)
  userId: number

  @Field(() => [Photo])
  photos: Photo[]
}
