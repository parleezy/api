import { Controller } from '@nestjs/common'

// Service
import { LeagueService } from './league.service'

@Controller('league')
export class LeagueController {
    constructor(private _leagueService: LeagueService) {}
}
