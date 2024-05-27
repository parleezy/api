import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'

// Data
import { System } from '@/models/system'

// Utils
import { UserNotificationService } from './user-notification.service'
import { User } from '@/domain/user/schema/user.schema'

@Injectable()
export class UserNotificationListenerService extends UserNotificationService {
    @OnEvent(System.EventType.LOGIN)
    login(data: { user: User }): void {
        this.create(this._userNoticiationFactory.authentication.login(data.user))
    }
}
