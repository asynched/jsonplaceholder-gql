import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPostsByUserId(userId: number, { page = 1, size = 10 } = {}) {
    return this.prisma.post.findMany({
      where: {
        userId,
      },
      skip: (page - 1) * size,
      take: size,
      include: {
        comments: {
          take: 10,
        },
      },
    })
  }
}
