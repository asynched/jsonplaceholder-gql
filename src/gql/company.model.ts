import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Company {
  @Field()
  name: string

  @Field()
  catchPhrase: string

  @Field()
  bs: string
}
