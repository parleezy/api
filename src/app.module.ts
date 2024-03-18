import { Module } from '@nestjs/common'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/data/providers'

// Modules
import { ActivityModule } from '@/modules/feature/user-management/activity/activity.module'
import { AssociationModule } from '@/modules/feature/entities/association/association.module'
import { AuthenticationModule } from '@/modules/feature/user-management/authentication/authentication.module'
import { LeagueModule } from '@/modules/feature/entities/league/league.module'
import { PermissionModule } from '@/modules/feature/user-management/permission/permission.module'
import { ProfileModule } from '@/modules/feature/user-management/profile/profile.module'
import { PlayerModule } from '@/modules/feature/user-management/player/player.module'
import { CompetitionModule } from '@/modules/feature/entities/competition/competition.module'

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
        CompetitionModule,
        LeagueModule,
        PermissionModule,
        PlayerModule,
        ProfileModule,

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
