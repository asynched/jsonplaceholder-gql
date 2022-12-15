import { join } from 'node:path'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { UsersModule } from '@/users/users.module'
import { TodosModule } from '@/todos/todos.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src', 'schema.gql'),
      sortSchema: true,
      playground: true,
      driver: ApolloDriver,
    }),
    UsersModule,
    TodosModule,
  ],
})
export class AppModule {}
