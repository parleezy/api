// src/common/middleware/ip.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class IpMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void {
        const xForwardedFor = req.headers['x-forwarded-for']

        if (typeof xForwardedFor === 'string') {
            req.ipAddress = xForwardedFor.split(',')[0]
        } else {
            req.ipAddress = req.ip
        }
        next()
    }
}
