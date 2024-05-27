import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// League
import { Newsletter, NewsletterDocument } from './newsletter.schema'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Data
import { System } from '@/models/system'

@Injectable()
export class NewsletterRepository extends MongoRepository<NewsletterDocument> {
    constructor(@InjectModel(Newsletter.name, System.DatabaseName.DOMAIN) newsletterModel: Model<NewsletterDocument>) {
        super(newsletterModel)
    }
}
