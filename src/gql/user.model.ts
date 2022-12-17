import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Todo } from '@/gql/todo.model'
import { Address } from '@/gql/address.model'
import { Company } from '@/gql/company.model'
import { Album } from '@/gql/album.model'
import { Post } from '@/gql/post.model'

@ObjectType()
export class User {
  @Field(() => Int)
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

  @Field()
  address: Address

  @Field()
  company: Company

  @Field(() => [Todo])
  todos: Todo[]

  @Field(() => [Album])
  albums: Album[]

  @Field(() => [Post])
  posts: Post[]
}
