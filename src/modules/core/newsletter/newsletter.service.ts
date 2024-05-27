import { Injectable } from '@nestjs/common'

// Models
import { Core } from '@/models/core'

// Newsletter
import { NewsletterRepository } from './newsletter.repository'
import { Newsletter } from './newsletter.schema'

@Injectable()
export class NewsletterService {
    constructor(protected _newsletterRespository: NewsletterRepository) {}

    async signup(dto: Core.CreateSubscriberParams): Promise<Newsletter> {
        const exists = await this._newsletterRespository.findOne({ email: dto.email })

        if (exists) {
            return exists
        }

        return await this._newsletterRespository.create({ email: dto.email, date: new Date() })
    }
}
