import { Module } from '@nestjs/common'
import { PostsService } from '@/posts/posts.service'
import { PostsResolver } from '@/posts/posts.resolver'
import { PrismaModule } from '@/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [PostsResolver, PostsService],
  exports: [PostsService],
})
export class PostsModule {}
