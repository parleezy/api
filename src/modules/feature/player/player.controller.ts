import { Controller, Get, UseGuards } from '@nestjs/common'

// Data
import { Player } from './schema/player.schema'

// Service
import { PlayerService } from './player.service'

// Shareds
import { AuthorizationGuard } from '@/shared/guards/authorization.guard'
import { GetPayload } from '@/shared/decorators/get-payload.decorator'

// Types
import { Api } from '@/data/types/api'

@Controller('player')
export class PlayerController {
    constructor(private _profileService: PlayerService) {}

    @UseGuards(AuthorizationGuard)
    @Get('me')
    async me(@GetPayload() payload: Api.JwtPayload): Promise<Api.Response<Partial<Player>>> {
        const data = await this._profileService.retrieve.byId(payload.player)

        // Sanitize sensative data
        data.tokens = null
        data.credentials.password = null

        return {
            data,
            success: true,
        }
    }
}
