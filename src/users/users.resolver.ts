import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { User } from '@/gql/user.model'
import { Todo } from '@/gql/todo.model'
import { Address } from '@/gql/address.model'
import { Company } from '@/gql/company.model'
import { UsersService } from '@/users/users.service'
import { TodosService } from '@/todos/todos.service'
import { Album } from '@/gql/album.model'
import { AlbumsService } from '@/albums/albums.service'

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly todosService: TodosService,
    private readonly albumsService: AlbumsService
  ) {}

  @Query(() => [User], { name: 'users' })
  async getUsers(
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
    @Args('size', { type: () => Int, defaultValue: 10 }) size: number
  ) {
    return await this.usersService.findMany({
      page,
      size,
    })
  }

  @Query(() => User, { nullable: true, name: 'user' })
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return await this.usersService.findUserById(id)
  }

  @ResolveField('todos', () => [Todo])
  async todos(
    @Parent() user: User,
    @Args('size', { type: () => Int, defaultValue: 10 }) size: number,
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number
  ) {
    return await this.todosService.getTodosByUserId(user.id, {
      size,
      page,
    })
  }

  @ResolveField('address', () => Address)
  async address(@Parent() user: User) {
    return await this.usersService.getAddressByUserId(user.id)
  }

  @ResolveField('company', () => Company)
  async company(@Parent() user: User) {
    return await this.usersService.getCompanyByUserId(user.id)
  }

  @ResolveField('albums', () => [Album])
  async albums(
    @Parent() user: User,

    @Args('size', { type: () => Int, defaultValue: 10 }) size: number,
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number
  ) {
    return await this.albumsService.getAlbumsByUserId(user.id, {
      size,
      page,
    })
  }
}
