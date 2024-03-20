import { TeamFactory } from './team.factory'
import { Injectable } from '@nestjs/common'

// Team
import { Team } from './schema/team.schema'
import { TeamRepository } from './team.repository'

// Api
import { Api } from '@/data/types/api'

@Injectable()
export class TeamService {
    constructor(
        private _teamFactory: TeamFactory,
        private _teamRepository: TeamRepository,
    ) {}

    private async _retrieveById(id: string): Promise<Team | null> {
        return await this._teamRepository.retrieve(id)
    }

    async create(dto: Api.TeamCreateParams): Promise<Team> {
        return await this._teamRepository.create(this._teamFactory.create(dto))
    }

    async list(): Promise<Team[]> {
        return await this._teamRepository.list()
    }

    get retrieve() {
        return {
            byId: (id: string): Promise<Team | null> => this._retrieveById(id),
        }
    }
}
