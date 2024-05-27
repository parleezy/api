import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { JwtService as NestJWTService } from '@nestjs/jwt'

// Data
import { Core } from '@/models/core'

// Schemas
import { User } from '@/domain/user/schema/user.schema'
import { Player } from '@/domain/player/schema/player.schema'

@Injectable()
export class JwtService {
    constructor(
        private _nestJWTService: NestJWTService,
        private _configService: ConfigService,
    ) {}

    private _signToken(payload: Core.JwtPayload, refresh: boolean): Promise<string> {
        return this._nestJWTService.signAsync(payload, {
            secret: refresh
                ? this._configService.get<string>('jwt.refresh')
                : this._configService.get<string>('jwt.access'),
            expiresIn: refresh ? '7d' : '10m',
            issuer: this._configService.get<string>('jwt.issuer'),
        })
    }

    public async buildTokens(user: User, player: Player): Promise<{ access: string; refresh: string }> {
        const [access, refresh] = await Promise.all([
            this._signToken(
                {
                    player: player._id.toString(),
                    user: user._id.toString(),
                    role: user.role,
                    verified: user.verified,
                },
                false,
            ),
            this._signToken(
                {
                    player: player._id.toString(),
                    user: user._id.toString(),
                    role: user.role,
                    verified: user.verified,
                },
                true,
            ),
        ])

        return { access, refresh }
    }
}
