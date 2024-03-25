import { Injectable } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// Competition
import { Competition } from '../competition.schema'
import { CompetitionRepository } from '../competition.repository'
import { CompetitionFactory } from '../competition.factory'
import { CompetitionEventService } from './competition-events.service'

@Injectable()
export class CompetitionService {
    constructor(
        private _events: CompetitionEventService,
        private _competitionFactory: CompetitionFactory,
        private _competitionRepository: CompetitionRepository,
    ) {}

    async create(dto: Api.CompetitionCreateParams): Promise<Competition> {
        const competition = await this._competitionRepository.create(this._competitionFactory.create())

        this._events.competitionCreated(competition, dto.league_id)

        return competition
    }

    list(): Promise<Competition[]> {
        return this._competitionRepository.list()
    }

    retrieve(id: string): Promise<Competition> {
        return this._competitionRepository.retrieve(id)
    }
}
