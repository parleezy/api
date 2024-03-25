import { Injectable } from '@nestjs/common'

// Competition
import { Competition } from './competition.schema'
import { CompetitionRepository } from './competition.repository'

@Injectable()
export class CompetitionService {
    constructor(private _competitionRepository: CompetitionRepository) {}

    create(): Promise<Competition> {
        return this._competitionRepository.create({})
    }

    list(): Promise<Competition[]> {
        return this._competitionRepository.list()
    }

    retrieve(id: string): Promise<Competition> {
        return this._competitionRepository.retrieve(id)
    }
}
