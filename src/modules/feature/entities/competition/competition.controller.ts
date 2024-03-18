import { Controller } from '@nestjs/common'

// Service
import { CompetitionService } from './competition.service'

@Controller('competitions')
export class CompetitionController {
    constructor(private _competitionService: CompetitionService) {}
}
