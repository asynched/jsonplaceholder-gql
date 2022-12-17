import { PrismaClient } from '@prisma/client'

import users from '../data/users.json'
import todos from '../data/todos.json'
import albums from '../data/albums.json'
import photos from '../data/photos.json'
import posts from '../data/posts.json'
import comments from '../data/comments.json'

const main = async () => {
  const client = new PrismaClient()

  await client.$connect()

  await Promise.all([
    client.user.deleteMany({}),
    client.todo.deleteMany({}),
    client.album.deleteMany({}),
    client.photo.deleteMany({}),
    client.post.deleteMany({}),
    client.comment.deleteMany({}),
  ])

  await Promise.all(
    users.map((user) =>
      client.user.create({
        data: {
          ...user,
          address: {
            create: {
              ...user.address,
              geo: {
                create: user.address.geo,
              },
            },
          },
          company: {
            create: user.company,
          },
        },
      })
    )
  )

  await Promise.all(
    todos.map((todo) =>
      client.todo.create({
        data: todo,
      })
    )
  )

  await Promise.all(
    albums.map((album) =>
      client.album.create({
        data: album,
      })
    )
  )

  await Promise.all(
    photos.map((photo) =>
      client.photo.create({
        data: photo,
      })
    )
  )

  await Promise.all(
    posts.map((post) =>
      client.post.create({
        data: post,
      })
    )
  )

  await Promise.all(
    comments.map((comment) =>
      client.comment.create({
        data: comment,
      })
    )
  )
}

main()
