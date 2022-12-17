import { join } from 'node:path'
import { ThrottlerModule } from '@nestjs/throttler'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { UsersModule } from '@/users/users.module'
import { TodosModule } from '@/todos/todos.module'
import { AlbumsModule } from '@/albums/albums.module'
import { PostsModule } from '@/posts/posts.module'
import { LoggerMiddleware } from '@/middlewares/logger.middleware'

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src', 'schema.gql'),
      sortSchema: true,
      playground: true,
      driver: ApolloDriver,
    }),
    UsersModule,
    TodosModule,
    AlbumsModule,
    PostsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
