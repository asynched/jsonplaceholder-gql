import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Geo } from './geo.model'

@ObjectType()
export class Address {
  @Field()
  street: string

  @Field()
  suite: string

  @Field()
  city: string

  @Field()
  zipcode: string

  @Field()
  geo: Geo
}
