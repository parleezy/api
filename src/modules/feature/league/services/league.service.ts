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

    async addCompetition(league: string, competition: Competition): Promise<League> {
        return await this._leagueRepository.update(league, { $push: { competitions: competition._id } })
    }

    get retrieve() {
        return {
            id: (id: string): Promise<League | null> => {
                return this._leagueRepository.retrieve(id)
            },
            external: (id: number): Promise<League | null> => {
                const league = this._leagueRepository.search({
                    'hook.id': id,
                })

                return league[0]
            },
        }
    }
}
