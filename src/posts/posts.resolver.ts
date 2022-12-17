import { Resolver } from '@nestjs/graphql'
import { PostsService } from '@/posts/posts.service'

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}
}
