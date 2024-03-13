import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Association
import { Event, EventDocument } from './schema/event.schema'

// Generic Repo
import { MongoRepository } from '@/data/mongo/mongo.repository'

@Injectable()
export class EventRepository extends MongoRepository<EventDocument> {
    constructor(@InjectModel(Event.name) eventModel: Model<EventDocument>) {
        super(eventModel)
    }
}
