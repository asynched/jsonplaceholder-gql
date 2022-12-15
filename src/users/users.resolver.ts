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
import { UsersService } from '@/users/users.service'
import { TodosService } from '@/todos/todos.service'

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly todosService: TodosService
  ) {}

  @Query((returns) => [User])
  async allUsers() {
    const users = await this.usersService.findMany()

    return users
  }

  @Query((returns) => User, { nullable: true })
  async userById(@Args('id', { type: () => Int }) id: number) {
    const user = await this.usersService.findUserById(id)

    return user
  }

  @ResolveField('todos', (returns) => [Todo])
  async todos(@Parent() user: User) {
    const todos = await this.todosService.getTodosByUserId(user.id)

    return todos
  }
}
