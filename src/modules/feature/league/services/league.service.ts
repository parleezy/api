import { Injectable } from '@nestjs/common'

// Competition
import { Competition } from '@/modules/feature/competition/schema/competition.schema'

// League
import { League } from '@/league/schema/league.schema'
import { LeagueFactory } from '@/league/league.factory'
import { LeagueRepository } from '@/league/league.repository'

// Models
import { Api } from '@/models/api'

@Injectable()
export class LeagueService {
    constructor(
        private _leagueFactory: LeagueFactory,
        private _leagueRepository: LeagueRepository,
    ) {}

    create(dto: Api.LeagueCreateParams): Promise<League> {
        return this._leagueRepository.create(this._leagueFactory.create(dto))
    }

    list(): Promise<League[]> {
        return this._leagueRepository.list()
    }

    retrieve(id: string): Promise<League> {
        return this._leagueRepository.retrieve(id)
    }

    async addCompetition(league: string, competition: Competition): Promise<League> {
        return await this._leagueRepository.update(league, { $push: { competitions: competition._id } })
    }
}
