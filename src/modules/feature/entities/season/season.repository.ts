import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Season
import { Season, SeasonDocument } from './schema/season.schema'

// Generic Repo
import { MongoRepository } from '@/data/mongo/mongo.repository'

@Injectable()
export class SeasonRepository extends MongoRepository<SeasonDocument> {
    constructor(@InjectModel(Season.name) seasonModel: Model<SeasonDocument>) {
        super(seasonModel)
    }
}
