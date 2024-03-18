import { Injectable } from '@nestjs/common'

// Api
import { Api } from '@/data/types/api'

// League
import { League } from './schema/league.schema'
import { LeagueFactory } from './league.factory'
import { LeagueRepository } from './league.repository'

@Injectable()
export class LeagueService {
    constructor(
        private _leagueFactory: LeagueFactory,
        private _leagueRepository: LeagueRepository,
    ) {}

    private async _retrieveById(id: string): Promise<League | null> {
        return await this._leagueRepository.retrieve(id)
    }

    async create(dto: Api.LeagueCreateParams): Promise<League> {
        return await this._leagueRepository.create(this._leagueFactory.create(dto))
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
