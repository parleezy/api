import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// League
import { Venue, VenueDocument } from './schema/venue.schema'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

@Injectable()
export class VenueRepository extends MongoRepository<VenueDocument> {
    constructor(@InjectModel(Venue.name) venueModel: Model<VenueDocument>) {
        super(venueModel, [])
    }
}
