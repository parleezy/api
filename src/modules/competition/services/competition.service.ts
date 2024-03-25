import { Injectable } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// Repository
import { Competition } from '@/modules/competition/schema/competition.schema'
import { CompetitionFactory } from '@/modules/competition/competition.factory'
import { CompetitionRepository } from '@/modules/competition/competition.repository'

@Injectable()
export class CompetitionService {
    constructor(
        private _competitionFactory: CompetitionFactory,
        private _competitionRepository: CompetitionRepository,
    ) {}

    async create(dto: Api.CompetitionCreateParams): Promise<Competition> {
        return await this._competitionRepository.create(this._competitionFactory.create(dto))
    }
}
