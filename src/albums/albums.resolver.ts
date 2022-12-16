import { Resolver } from '@nestjs/graphql'
import { AlbumsService } from '@/albums/albums.service'

@Resolver()
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}
}
