import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany({ size = 10, page = 1 }) {
    return await this.prisma.user.findMany({
      take: size,
      skip: (page - 1) * size,
    })
  }

  async findUserById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async getAddressByUserId(id: number) {
    return await this.prisma.address.findUnique({
      where: {
        id,
      },
      include: {
        geo: true,
      },
    })
  }

  async getCompanyByUserId(id: number) {
    return await this.prisma.company.findUnique({
      where: {
        id,
      },
    })
  }
}
