import { Injectable } from '@nestjs/common'
import { TeamRepository } from './team.repository'
import { Team } from './team.schema'
import { Api } from '@/data/types/api'

@Injectable()
export class TeamService {
    constructor(private _teamRepository: TeamRepository) {}

    private async _retrieveById(id: string): Promise<Team | null> {
        return await this._teamRepository.retrieve(id)
    }

    async create(dto: Api.TeamCreateParams): Promise<Team> {
        return await this._teamRepository.create(dto)
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
