import { Module } from '@nestjs/common'

// Modules
import { AuthenticationModule } from './authentication'
import { FeatureModule } from './feature'
import { PermissionModule } from './permission'
import { UserNotificationModule } from './user-notification'
import { NewsletterModule } from './newsletter'

@Module({
    imports: [AuthenticationModule, FeatureModule, NewsletterModule, PermissionModule, UserNotificationModule],
})
export class CoreModule {}
