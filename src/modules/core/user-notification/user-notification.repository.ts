import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Data
import { System } from '@/models/system'

// Schema
import { UserNotification, UserNotificationDocument } from './schema/user-notification.schema'

@Injectable()
export class UserNotificationRepository extends MongoRepository<UserNotificationDocument> {
    constructor(
        @InjectModel(UserNotification.name, System.DatabaseName.DOMAIN)
        userNotificationModel: Model<UserNotificationDocument>,
    ) {
        super(userNotificationModel)
    }
}
