import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Fixture
import { Fixture, FixtureDocument } from './schema/fixture.schema'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

@Injectable()
export class FixtureRepository extends MongoRepository<FixtureDocument> {
    constructor(@InjectModel(Fixture.name) fixtureModel: Model<FixtureDocument>) {
        super(fixtureModel)
    }
}
