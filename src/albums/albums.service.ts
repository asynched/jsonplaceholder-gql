import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AlbumsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAlbumsByUserId(userId: number, { page = 1, size = 10 } = {}) {
    return await this.prisma.album.findMany({
      where: {
        userId,
      },
      skip: (page - 1) * size,
      take: size,
      include: {
        photos: {
          take: 10,
        },
      },
    })
  }
}
