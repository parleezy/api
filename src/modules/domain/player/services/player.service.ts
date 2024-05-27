import { Injectable } from '@nestjs/common'

// Model
import { Api } from '@/models/api'

// Player
import { PlayerFactory } from '@/domain/player/player.factory'
import { PlayerRepository } from '@/domain/player/player.repository'
import { Player } from '../schema/player.schema'

@Injectable()
export class PlayerService {
    constructor(
        private _playerFactory: PlayerFactory,
        private _playerRepository: PlayerRepository,
    ) {}

    async create(dto: Api.CreatePlayerParams): Promise<Player> {
        return await this._playerRepository.create(this._playerFactory.create(dto))
    }

    get retrieve() {
        return {
            byId: async (id: string): Promise<Player | null> => {
                return await this._playerRepository.retrieve(id)
            },
            byUser: async (id: string): Promise<Player | null> => {
                return await this._playerRepository.findOne({
                    user: id,
                })
            },
        }
    }
}
