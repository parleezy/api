import { Injectable } from '@nestjs/common'

// Repo
import { CompetitionRepository } from './competition.repository'

@Injectable()
export class CompetitionService {
    constructor(private _competitionRepository: CompetitionRepository) {}
}
