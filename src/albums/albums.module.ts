import { Module } from '@nestjs/common'
import { AlbumsService } from '@/albums/albums.service'
import { AlbumsResolver } from '@/albums/albums.resolver'
import { PrismaModule } from '@/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [AlbumsResolver, AlbumsService],
  exports: [AlbumsService],
})
export class AlbumsModule {}
