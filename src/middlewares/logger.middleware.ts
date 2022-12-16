import { Injectable, Logger, NestMiddleware } from '@nestjs/common'
import type { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name)

  private toString(data: unknown) {
    if (typeof data === 'string') {
      return data
    }

    return JSON.stringify(data)
  }

  use(req: Request, res: Response, next: NextFunction) {
    const now = Date.now()
    const { method, url } = req
    const userAgent = req.get('user-agent') || ''
    const contentLength = res.get('content-length')

    this.logger.log(
      this.toString({
        method,
        url,
        userAgent,
        contentLength,
      })
    )

    res.on('finish', () => {
      const end = Date.now()
      const time = end - now
      const { statusCode } = res
      const contentLength = res.get('content-length')

      if (res.statusCode >= 400) {
        this.logger.error(
          this.toString({
            method,
            url,
            userAgent,
            statusCode,
            time,
            contentLength,
          })
        )
      } else {
        this.logger.log(
          this.toString({
            method,
            url,
            userAgent,
            statusCode,
            time,
            contentLength,
          })
        )
      }
    })

    next()
  }
}
