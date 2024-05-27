import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// League
import { User, UserDocument } from './schema/user.schema'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Data
import { System } from '@/models/system'

@Injectable()
export class UserRepository extends MongoRepository<UserDocument> {
    constructor(@InjectModel(User.name, System.DatabaseName.DOMAIN) userModel: Model<UserDocument>) {
        super(userModel)
    }
}
