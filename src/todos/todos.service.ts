import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  async getTodosByUserId(userId: number, { size = 10, page = 1 } = {}) {
    return await this.prisma.todo.findMany({
      where: {
        userId,
      },
      skip: (page - 1) * size,
      take: size,
    })
  }
}
