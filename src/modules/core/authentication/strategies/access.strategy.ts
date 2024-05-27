import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Strategy, ExtractJwt } from 'passport-jwt'

// Service
import { PlayerService } from '@/domain/player/services/player.service'
import { UserService } from '@/domain/user/services/user.service'

// Data
import { Core } from '@/models/core'

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        config: ConfigService,
        private _playerService: PlayerService,
        private _userService: UserService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('jwt.access'),
        })
    }

    async validate(payload: Core.JwtPayload) {
        const [user, player] = await Promise.all([
            this._userService.retrieve.byId(payload.user),
            this._playerService.retrieve.byId(payload.player),
        ])

        return {
            player: player._id,
            user: user._id,
            role: user.role,
            verified: user.verified,
        }
    }
}
