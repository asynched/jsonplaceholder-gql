import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Geo {
  @Field()
  lat: string

  @Field()
  lng: string
}
