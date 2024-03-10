import { Injectable } from '@nestjs/common'
import { LeagueRepository } from './league.repository'
import { League } from './league.schema'
import { Api } from '@/data/types/api'

@Injectable()
export class LeagueService {
    constructor(private _leagueRepository: LeagueRepository) {}

    private async _retrieveById(id: string): Promise<League | null> {
        return await this._leagueRepository.retrieve(id)
    }

    async create(dto: Api.LeagueCreateParams): Promise<League> {
        return await this._leagueRepository.create(dto)
    }

    async list(): Promise<League[]> {
        return await this._leagueRepository.list()
    }

    get retrieve() {
        return {
            byId: (id: string): Promise<League | null> => this._retrieveById(id),
        }
    }
}
