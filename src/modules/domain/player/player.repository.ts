import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// League
import { Player, PlayerDocument } from './schema/player.schema'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Data
import { System } from '@/models/system'

@Injectable()
export class PlayerRepository extends MongoRepository<PlayerDocument> {
    constructor(@InjectModel(Player.name, System.DatabaseName.DOMAIN) playerModel: Model<PlayerDocument>) {
        super(playerModel)
    }
}
