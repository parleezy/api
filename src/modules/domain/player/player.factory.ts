import { Injectable } from '@nestjs/common'

// Schema
import { Player } from './schema/player.schema'
import { Api } from '@/models/api'

@Injectable()
export class PlayerFactory {
    create(dto: Api.CreatePlayerParams): Player {
        const player = new Player()

        player.user = dto.user

        return player
    }
}
