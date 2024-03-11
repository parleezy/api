import { Injectable } from '@nestjs/common'

// Profile
import { Profile } from './profile.schema'
import { ProfileFactory } from './profile.factory'
import { ProfileRepository } from './profile.repository'

// Player
import { Player } from '@/modules/feature/user-management/player/schema/player.schema'

@Injectable()
export class ProfileService {
    constructor(
        private _profileFactory: ProfileFactory,
        private _profileRepository: ProfileRepository,
    ) {}

    private async _retrieveById(id: string): Promise<Profile | null> {
        return await this._profileRepository.retrieve(id)
    }

    private async _retrieveByPlayerId(id: string): Promise<Profile | null> {
        const players = await this._profileRepository.search({ player: id })

        return players.length === 0 ? null : players[0]
    }

    async create(player: Player): Promise<Profile> {
        return await this._profileRepository.create(this._profileFactory.create(player))
    }

    get retrieve() {
        return {
            byId: (id: string): Promise<Profile | null> => this._retrieveById(id),
            byPlayer: (id: string): Promise<Profile | null> => this._retrieveByPlayerId(id),
        }
    }
}
