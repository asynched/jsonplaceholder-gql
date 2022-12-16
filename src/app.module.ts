import { join } from 'node:path'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { UsersModule } from '@/users/users.module'
import { TodosModule } from '@/todos/todos.module'
import { AlbumsModule } from '@/albums/albums.module'
import { LoggerMiddleware } from '@/middlewares/logger.middleware'

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
    AlbumsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
