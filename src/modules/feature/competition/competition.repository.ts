import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Competition
import { Competition, CompetitionDocument } from './Competition.schema'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

@Injectable()
export class CompetitionRepository extends MongoRepository<CompetitionDocument> {
    constructor(@InjectModel(Competition.name) competitionModel: Model<CompetitionDocument>) {
        super(competitionModel)
    }
}
