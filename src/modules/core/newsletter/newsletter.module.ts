import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Data
import { System } from '@/models/system'

// Permission
import { Newsletter, NewsletterSchema } from './newsletter.schema'
import { NewsletterController } from './newsletter.controller'
import { NewsletterRepository } from './newsletter.repository'
import { NewsletterService } from './newsletter.service'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Newsletter.name, schema: NewsletterSchema }], System.DatabaseName.DOMAIN),
    ],
    controllers: [NewsletterController],
    providers: [NewsletterRepository, NewsletterService],
    exports: [NewsletterService],
})
export class NewsletterModule {}
