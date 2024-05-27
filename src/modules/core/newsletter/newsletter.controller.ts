import { Body, Controller, Post } from '@nestjs/common'

// Data
import { Api } from '@/models/api'

// Service
import { NewsletterService } from './newsletter.service'
import { Newsletter } from './newsletter.schema'
import { Core } from '@/models/core'

@Controller('newsletters')
export class NewsletterController {
    constructor(private _newsletterService: NewsletterService) {}

    @Post()
    async signupWithEmail(@Body() dto: Core.CreateSubscriberParams): Promise<Api.Response<Newsletter>> {
        const data = await this._newsletterService.signup(dto)

        return {
            data,
            success: true,
        }
    }
}
