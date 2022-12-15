import { Resolver } from '@nestjs/graphql'
import { TodosService } from '@/todos/todos.service'

@Resolver()
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}
}
