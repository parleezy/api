import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Data
import { System } from '@/models/system'

// Notification
import { UserNotification, UserNotificationSchema } from './schema/user-notification.schema'
import { UserNotificationController } from './controllers/user-notification.controller'
import { UserNotificationFactory } from './user-notification.factory'
import { UserNotificationService } from './services/user-notification.service'
import { UserNotificationRepository } from './user-notification.repository'
import { UserNotificationListenerService } from './services/user-notification-listener.service'

@Module({
    imports: [
        MongooseModule.forFeature(
            [{ name: UserNotification.name, schema: UserNotificationSchema }],
            System.DatabaseName.DOMAIN,
        ),
    ],
    controllers: [UserNotificationController],
    providers: [
        UserNotificationService,
        UserNotificationRepository,
        UserNotificationFactory,
        UserNotificationListenerService,
    ],
    exports: [UserNotificationService],
})
export class UserNotificationModule {}
