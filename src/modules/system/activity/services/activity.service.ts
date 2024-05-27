import { Injectable } from '@nestjs/common'

// Activity
import { ActivityFactory } from '@/system/activity/activity.factory'
import { ActivityRepository } from '@/system/activity/activity.repository'
import { Activity } from '../schema/activity.schema'

@Injectable()
export class ActivityService {
    constructor(
        protected _activityFactory: ActivityFactory,
        private _activityRepository: ActivityRepository,
    ) {}

    async create(activity: Activity): Promise<void> {
        await this._activityRepository.create(activity)
    }
}
