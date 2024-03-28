import { Injectable } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// Competition
import { Competition } from '../schema/competition.schema'
import { CompetitionRepository } from '../competition.repository'
import { CompetitionFactory } from '../competition.factory'
import { CompetitionEventService } from './competition-events.service'

// Team
import { Team } from '@/team/schema/team.schema'

@Injectable()
export class CompetitionService {
    constructor(
        private _events: CompetitionEventService,
        private _competitionFactory: CompetitionFactory,
        private _competitionRepository: CompetitionRepository,
    ) {}

    async create(dto: Api.CompetitionCreateParams): Promise<Competition> {
        const competition = await this._competitionRepository.create(this._competitionFactory.create(dto))

        this._events.competitionCreated(competition, dto.league_id)

        return competition
    }

    list(): Promise<Competition[]> {
        return this._competitionRepository.list()
    }

    async addTeams(competition: Competition, teams: Team[]): Promise<Competition> {
        return await this._competitionRepository.update(competition._id, {
            $push: { 'participants.teams': { $each: teams.map((t) => t._id) } },
        })
    }

    get retrieve() {
        return {
            id: (id: string): Promise<Competition | null> => {
                return this._competitionRepository.retrieve(id)
            },
            external: (id: number): Promise<Competition | null> => {
                const competition = this._competitionRepository.search({
                    'hook.id': id,
                })

                return competition[0]
            },
        }
    }
}
