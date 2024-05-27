import { JwtModule as NestJwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'

// Controllers
import { AuthenticationController } from './controllers/authentication.controller'
import { AuthenticationEmailController } from './controllers/authentication-email.controller'

// Strategies
import { AccessStrategy } from './strategies/access.strategy'
import { RefreshStrategy } from './strategies/refresh.strategy'

// Services
import { AuthenticationEmailService } from './services/authentication-email.service'
import { AuthenticationService } from './services/authentication.service'
import { JwtService } from './services/jwt.service'

// Imports
import { PlayerModule } from '@/domain/player'
import { UserModule } from '@/domain/user'
import { StringEncryptor } from '@/shared/utils'

@Module({
    imports: [NestJwtModule.register({}), PlayerModule, UserModule],
    controllers: [AuthenticationController, AuthenticationEmailController],
    providers: [
        AuthenticationService,
        AuthenticationEmailService,
        JwtService,
        AccessStrategy,
        RefreshStrategy,
        StringEncryptor,
    ],
    exports: [AuthenticationService],
})
export class AuthenticationModule {}
