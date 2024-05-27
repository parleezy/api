import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Data
import { System } from '@/models/system'

// Activity
import { Activity, ActivitySchema } from './schema/activity.schema'
import { ActivityRepository } from './activity.repository'
import { ActivityFactory } from './activity.factory'
import { ActivityService } from './services/activity.service'
import { ActivityAuthenticationListenerService } from './listeners/activity-authentication-listener.service'

@Module({
    imports: [
        MongooseModule.forFeature(
            [{ name: Activity.name, schema: ActivitySchema }],
            System.DatabaseName.INFRASTRUCTURE,
        ),
    ],
    providers: [ActivityRepository, ActivityFactory, ActivityService, ActivityAuthenticationListenerService],
    exports: [ActivityService],
})
export class ActivityModule {}
