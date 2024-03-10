import { Module } from '@nestjs/common'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/data/providers'

// Modules
import { ActivityModule } from '@/modules/feature/activity/activity.module'
import { AuthenticationModule } from '@/modules/feature/authentication/authentication.module'
import { LeagueModule } from '@/modules/feature/league/league.module'
import { PermissionModule } from '@/modules/feature/permission/permission.module'
import { ProfileModule } from '@/modules/feature/profile/profile.module'
import { PlayerModule } from '@/modules/feature/player/player.module'

// Util Modules
import { JwtModule } from '@/modules/utility/jwt/jwt.module'
import { MailerModule } from '@/modules/utility/mailer/mailer.module'
import { StripeModule } from '@/modules/utility/stripe/stripe.module'

@Module({
    imports: [
        // Global Modules
        ConfigModule,
        ProvidersModule,

        // Feature Modules
        ActivityModule,
        AuthenticationModule,
        LeagueModule,
        PermissionModule,
        PlayerModule,
        ProfileModule,

        // Utility Modules
        JwtModule,
        MailerModule,
        StripeModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
