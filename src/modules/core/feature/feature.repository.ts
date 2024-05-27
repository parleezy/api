import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// League
import { Feature, FeatureDocument } from './schema/feature.schema'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Data
import { System } from '@/models/system'

@Injectable()
export class FeatureRepository extends MongoRepository<FeatureDocument> {
    constructor(@InjectModel(Feature.name, System.DatabaseName.DOMAIN) featureModel: Model<FeatureDocument>) {
        super(featureModel)
    }
}
