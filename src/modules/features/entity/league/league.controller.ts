import { Controller } from '@nestjs/common'

// League
import { LeagueService } from './league.service'

@Controller('leagues')
export class LeagueController {
    constructor(private _leagueService: LeagueService) {}
}
