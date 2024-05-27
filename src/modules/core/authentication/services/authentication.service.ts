import { EventEmitter2 } from '@nestjs/event-emitter'
import { BadRequestException, Injectable } from '@nestjs/common'

// Services
import { JwtService } from './jwt.service'
import { PlayerService } from '@/domain/player/services/player.service'
import { UserService } from '@/domain/user/services/user.service'

// Data
import { System } from '@/models/system'
import { Core } from '@/models/core'

// Schemas
import { User } from '@/domain/user/schema/user.schema'

// Utils
import { StringEncryptor } from '@/shared/utils'

@Injectable()
export class AuthenticationService {
    constructor(
        protected _eventEmitter: EventEmitter2,
        protected _jwtService: JwtService,
        protected _playerService: PlayerService,
        protected _stringEncryptor: StringEncryptor,
        protected _userService: UserService,
    ) {}

    protected async _loginUser(user: User): Promise<Core.Tokens> {
        const player = await this._playerService.retrieve.byUser(user._id)
        const tokens = await this._jwtService.buildTokens(user, player)

        if (!tokens || !player) {
            throw new BadRequestException({
                message: 'Login failed.',
            })
        }

        return tokens
    }

    async logout(payload: Core.JwtPayload): Promise<void> {
        const user = await this._userService.retrieve.byId(payload.user)

        if (!user) {
            throw new BadRequestException('Invalid token.')
        }

        this._eventEmitter.emit(System.EventType.LOGOUT, { user })

        return
    }

    async refresh(payload: Core.JwtRefreshPayload): Promise<Core.Tokens> {
        const [user, profile] = await Promise.all([
            this._userService.retrieve.byId(payload.user),
            this._playerService.retrieve.byId(payload.player),
        ])

        if (!user) {
            throw new BadRequestException('Invalid token.')
        }

        const isValid = this._stringEncryptor.compare(payload.refresh, user.tokens.jwt.refresh)

        if (!isValid) {
            throw new BadRequestException('Invalid token.')
        }

        const tokens = await this._jwtService.buildTokens(user, profile)

        if (!tokens) {
            throw new BadRequestException({
                message: 'Refresh failed.',
            })
        }

        this._eventEmitter.emit(System.EventType.REFRESH, { user, tokens })

        return tokens
    }
}
