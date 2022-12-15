import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  async getTodosByUserId(userId: number) {
    return await this.prisma.todo.findMany({
      where: {
        userId,
      },
    })
  }
}
