import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// League
import { League, LeagueDocument } from './league.schema'

// Generic Repo
import { MongoRepository } from '@/data/mongo/mongo.repository'

@Injectable()
export class LeagueRepository extends MongoRepository<LeagueDocument> {
    constructor(@InjectModel(League.name) leagueModel: Model<LeagueDocument>) {
        super(leagueModel)
    }
}
