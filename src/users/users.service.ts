import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany() {
    return await this.prisma.user.findMany()
  }

  async findUserById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }
}
