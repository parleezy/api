import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// League
import { Activity, ActivityDocument } from './schema/activity.schema'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Data
import { System } from '@/models/system'

@Injectable()
export class ActivityRepository extends MongoRepository<ActivityDocument> {
    constructor(
        @InjectModel(Activity.name, System.DatabaseName.INFRASTRUCTURE) activityModel: Model<ActivityDocument>,
    ) {
        super(activityModel)
    }
}
