import { Injectable } from '@nestjs/common'
import { CompetitionRepository } from './competition.repository'

@Injectable()
export class CompetitionService {
    constructor(private _competitionRepository: CompetitionRepository) {}
}
