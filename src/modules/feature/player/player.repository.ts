import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Player
import { Player, PlayerDocument } from '@/modules/feature/player/schema/player.schema'

// Generic Repo
import { MongoRepository } from '@/data/mongo/mongo.repository'

@Injectable()
export class PlayerRepository extends MongoRepository<PlayerDocument> {
    constructor(@InjectModel(Player.name) playerModel: Model<PlayerDocument>) {
        super(playerModel)
    }
}
