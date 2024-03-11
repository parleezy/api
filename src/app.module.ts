import { Module } from '@nestjs/common'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/data/providers'

// Modules
import { ActivityModule } from '@/modules/feature/activity/activity.module'
import { AssociationModule } from '@/modules/feature/association/association.module'
import { AuthenticationModule } from '@/modules/feature/authentication/authentication.module'
import { LeagueModule } from '@/modules/feature/league/league.module'
import { PermissionModule } from '@/modules/feature/permission/permission.module'
import { ProfileModule } from '@/modules/feature/profile/profile.module'
import { PlayerModule } from '@/modules/feature/player/player.module'
import { SeasonModule } from '@/modules/feature/season/season.module'

// Util Modules
import { JwtModule } from '@/modules/utility/jwt/jwt.module'
import { MailerModule } from '@/modules/utility/mailer/mailer.module'
import { StripeModule } from '@/modules/utility/stripe/stripe.module'

// Apis
import { ExternalApiModule } from './modules/external/external.module'

@Module({
    imports: [
        // Global Modules
        ConfigModule,
        ProvidersModule,

        // Feature Modules
        ActivityModule,
        AssociationModule,
        AuthenticationModule,
        LeagueModule,
        PermissionModule,
        PlayerModule,
        ProfileModule,
        SeasonModule,

        // Utility Modules
        JwtModule,
        MailerModule,
        StripeModule,

        // External Apis
        ExternalApiModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
