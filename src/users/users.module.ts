import { Module } from '@nestjs/common'
import { UsersService } from '@/users/users.service'
import { UsersResolver } from '@/users/users.resolver'
import { PrismaModule } from '@/prisma/prisma.module'
import { TodosModule } from '@/todos/todos.module'
import { AlbumsModule } from '@/albums/albums.module'

@Module({
  imports: [PrismaModule, TodosModule, AlbumsModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
