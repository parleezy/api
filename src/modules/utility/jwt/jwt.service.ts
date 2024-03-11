import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { JwtService as NestJWTService } from '@nestjs/jwt'

// Types
import { Api } from '@/data/types/api'

// Data
import { Profile } from '@/modules/feature/user-management/profile/profile.schema'
import { Player } from '@/modules/feature/user-management/player/schema/player.schema'

@Injectable()
export class JwtService {
    constructor(
        private _nestJWTService: NestJWTService,
        private _configService: ConfigService,
    ) {}

    private _signToken(payload: Api.JwtPayload, refresh: boolean): Promise<string> {
        return this._nestJWTService.signAsync(payload, {
            secret: refresh
                ? this._configService.get<string>('jwt.refresh')
                : this._configService.get<string>('jwt.access'),
            expiresIn: refresh ? '7d' : '10m',
            issuer: this._configService.get<string>('jwt.issuer'),
        })
    }

    public async buildTokens(player: Player, profile: Profile): Promise<{ access: string; refresh: string }> {
        const [access, refresh] = await Promise.all([
            this._signToken(
                {
                    profile: profile._id.toString(),
                    role: player.credentials.role,
                    player: player._id.toString(),
                    verified: player.credentials.verified,
                },
                false,
            ),
            this._signToken(
                {
                    profile: profile._id.toString(),
                    role: player.credentials.role,
                    player: player._id.toString(),
                    verified: player.credentials.verified,
                },
                true,
            ),
        ])

        return { access, refresh }
    }
}
