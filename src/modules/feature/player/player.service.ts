import { UpdateQuery } from 'mongoose'
import { Injectable } from '@nestjs/common'

// Player
import { Player } from './schema/player.schema'
import { PlayerFactory } from './player.factory'
import { PlayerRepository } from '@/modules/feature/player/player.repository'

// Types
import { Api } from '@/data/types/api'

@Injectable()
export class PlayerService {
    constructor(
        private _playerFactory: PlayerFactory,
        private _playerRepository: PlayerRepository,
    ) {}

    private async _retrieveByEmail(email: string): Promise<Player | null> {
        const players = await this._playerRepository.search({ 'credentials.email': email })

        return players.length === 0 ? null : players[0]
    }

    private async _retrieveById(id: string): Promise<Player | null> {
        return await this._playerRepository.retrieve(id)
    }

    private async _updateMultipleProperties(player: Player, query: UpdateQuery<Partial<Player>>): Promise<Player | null> {
        return await this._playerRepository.update(player._id, query)
    }

    private async _updateRefreshToken(player: Player, token: string): Promise<Player | null> {
        return await this._playerRepository.update(player._id, {
            'tokens.jwt.refresh': token,
        })
    }

    async create(dto: Api.PlayerCreateParams): Promise<Player> {
        const player = await this._playerRepository.create(this._playerFactory.create(dto))

        return player
    }

    get retrieve() {
        return {
            byEmail: (email: string): Promise<Player | null> => this._retrieveByEmail(email),
            byId: (id: string): Promise<Player | null> => this._retrieveById(id),
        }
    }

    get update() {
        return {
            properties: (player: Player, query: UpdateQuery<Partial<Player>>) => this._updateMultipleProperties(player, query),
            refresh: (player: Player, token: string): Promise<Player | null> => this._updateRefreshToken(player, token),
        }
    }
}
