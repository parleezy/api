import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Venue
import { Team, TeamDocument } from './schema/team.schema'

// Generic Repo
import { MongoRepository } from '@/data/mongo/mongo.repository'

@Injectable()
export class TeamRepository extends MongoRepository<TeamDocument> {
    constructor(@InjectModel(Team.name) teamModel: Model<TeamDocument>) {
        super(teamModel)
    }
}
