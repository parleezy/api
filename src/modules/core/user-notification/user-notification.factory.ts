import { Injectable } from '@nestjs/common'
import { Types } from 'mongoose'

// Schema
import { UserNotification } from './schema/user-notification.schema'

// Data
import { Core } from '@/models/core'
import { User } from '@/domain/user/schema/user.schema'

@Injectable()
export class UserNotificationFactory {
    private build(dto: Core.CreateUserNotificationParams): UserNotification {
        const userNotification = new UserNotification()

        userNotification.title = dto.title
        userNotification.description = dto.description
        userNotification.action = dto.action
        userNotification.read = dto.read
        userNotification.recipient = dto.recipient
        userNotification.sender = dto.sender
        userNotification.type = dto.type

        return userNotification
    }

    get authentication() {
        return {
            login: (user: User): UserNotification => {
                return this.build({
                    title: 'New login!',
                    description:
                        'A new login has occured on your account, if this was not you please reset your password immediately.',
                    action: null,
                    read: false,
                    recipient: user._id as unknown as Types.ObjectId,
                    sender: null,
                    type: Core.UserNotificationType.NEW_LOGIN,
                })
            },
        }
    }
}
