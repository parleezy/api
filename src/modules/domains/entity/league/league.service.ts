import { Injectable } from '@nestjs/common'
import { Types } from 'mongoose'

// Api
import { Api } from '@/data/types/api'

// Repositorry
import { LeagueRepository } from './league.repository'
import { LeagueFactory } from './league.factory'
import { League } from './schema/league.schema'

@Injectable()
export class LeagueService {
    constructor(
        private _leagueFactory: LeagueFactory,
        private _leagueRepository: LeagueRepository,
    ) {}

    async create(dto: Api.LeagueCreateParams): Promise<League> {
        return await this._leagueRepository.create(this._leagueFactory.create(dto))
    }

    async addCompetition(leagueId: string, competitionId: Types.ObjectId): Promise<League> {
        return await this._leagueRepository.update(leagueId, {
            $push: { competitions: competitionId },
        })
    }

    async removeCompetition(leagueId: string, competitionId: Types.ObjectId): Promise<League> {
        return await this._leagueRepository.update(leagueId, {
            $pull: { competitions: competitionId },
        })
    }
}
