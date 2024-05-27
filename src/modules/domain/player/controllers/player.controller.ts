import { Controller, Get, UseGuards } from '@nestjs/common'

// Api
import { Api } from '@/models/api'
import { Core } from '@/models/core'

// Player
import { Player } from '@/domain/player/schema/player.schema'
import { PlayerService } from '@/domain/player/services/player.service'

// Guards
import { AuthorizationGuard } from '@/shared/guards/authorization.guard'

// Decorators
import { GetPayload } from '@/shared/decorators/get-payload.decorator'

@Controller('players')
export class PlayerController {
    constructor(private _playerService: PlayerService) {}

    @UseGuards(AuthorizationGuard)
    @Get('me')
    async me(@GetPayload() payload: Core.JwtPayload): Promise<Api.Response<Player>> {
        const data = await this._playerService.retrieve.byId(payload.player)

        return {
            data,
            success: true,
        }
    }
}
