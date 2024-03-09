import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Strategy, ExtractJwt } from 'passport-jwt'

// Types
import { Api } from '@/data/types/api'

// Services
import { PlayerService } from '@/modules/feature/player/player.service'
import { ProfileService } from '@/modules/feature/profile/profile.service'

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        config: ConfigService,
        private _profileService: ProfileService,
        private _playerService: PlayerService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('jwt.access'),
        })
    }

    async validate(payload: Api.JwtPayload) {
        const [player, profile] = await Promise.all([
            this._playerService.retrieve.byId(payload.player),
            this._profileService.retrieve.byId(payload.profile),
        ])

        return {
            profile: profile._id,
            role: player.credentials.role,
            player: player._id,
            verified: player.credentials.verified,
        }
    }
}
