import { Module } from '@nestjs/common'

// Modules
import { AuthenticationModule } from './authentication'
import { FeatureModule } from './feature'
import { PermissionModule } from './permission'
import { UserNotificationModule } from './user-notification'

@Module({
    imports: [AuthenticationModule, FeatureModule, PermissionModule, UserNotificationModule],
})
export class CoreModule {}
