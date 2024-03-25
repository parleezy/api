import { Injectable } from '@nestjs/common'

// League
import { League } from '@/league/schema/league.schema'
import { LeagueRepository } from '@/league/league.repository'

// Competition
import { Competition } from '@/competition/competition.schema'

@Injectable()
export class LeagueService {
    constructor(private _leagueRepository: LeagueRepository) {}

    create(): Promise<League> {
        return this._leagueRepository.create({})
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
