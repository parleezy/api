import { Injectable } from '@nestjs/common'

// Schemas
import { User } from '@/domain/user/schema/user.schema'

// Activity
import { UserNotification } from '@/core/user-notification/schema/user-notification.schema'
import { UserNotificationFactory } from '@/core/user-notification/user-notification.factory'
import { UserNotificationRepository } from '@/core/user-notification/user-notification.repository'

@Injectable()
export class UserNotificationService {
    constructor(
        protected _userNoticiationFactory: UserNotificationFactory,
        private _userNotificationRepository: UserNotificationRepository,
    ) {}

    async create(userNotification: UserNotification): Promise<void> {
        await this._userNotificationRepository.create(userNotification)
    }

    get markRead() {
        return {
            all: async (user: User): Promise<UserNotification[]> => {
                const notifications = await this._userNotificationRepository.search({
                    recipient: user._id,
                    read: false,
                })

                const ids = notifications.map((n) => n._id)

                return await this._userNotificationRepository.updateMany(ids, {
                    read: true,
                })
            },
            many: async (ids: string[]): Promise<UserNotification[]> => {
                return await this._userNotificationRepository.updateMany(ids, {
                    read: true,
                })
            },
            one: async (id: string): Promise<UserNotification> => {
                return await this._userNotificationRepository.update(id, {
                    read: true,
                })
            },
        }
    }
}
